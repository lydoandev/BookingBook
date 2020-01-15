import React, { Component } from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import ItemCart from '../../components/Cart/ItemCart'
import navigateTo from '../../utils/navigateTo';
import * as userActions from '../../reduxs/authRedux/actions'
import { connect } from 'react-redux';
import callAPI from '../../utils/callAPI';
import { Navigation } from 'react-native-navigation';
import ModalAddCart from '../../components/Home/ModalAddCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      askDelete: false,
      idBookDelete: '',
      deleteSuccess: false,
      successMess: '',
      error: '',
      deleteAll: false
    }
    Navigation.events().bindComponent(this);
  }

  deleteItemCart = async () => {
    const { token, idUser, idCart } = this.props;
    const { idBookDelete, deleteAll } = this.state;
    const info = { BookId: idBookDelete, UserId: idUser, DeleteAll: deleteAll }
    console.log("Id: ", this.props.idCart);

    try {
      var data = await callAPI('api/basket', 'DELETE', info, token);
      this.props.getCart({ basketId: idCart, userId: idUser, token });
      this.changeAskDelete();
      this.setState(prevState => ({
        ...prevState,
        deleteSuccess: !prevState.deleteSuccess,
        successMess: "Xóa sách thành công"
      }))
    } catch (error) {

      this.setState(prevState => ({
        ...prevState,
        error: error.response.data.Message
      }))

    }
  }

  navigateToDetail = item => {
    navigateTo({
      item
    }, this.props.componentId, 'Detail');
  };

  changeDeleteSuccess = () => {
    this.setState(prevState => ({
      ...prevState,
      deleteSuccess: !prevState.deleteSuccess,
      successMess: '',
      error: ''
    }))
  }

  navigationButtonPressed = ({ buttonId }) => {
    if (buttonId === 'deleteAll') {
      this.setState(prevState => ({
        ...prevState,
        deleteAll: true
      }))
      this.changeAskDelete("");
    }
  };

  changeAskDelete = (idBookDelete) => {
    this.setState(prevState => ({
      ...prevState,
      askDelete: !prevState.askDelete,
      idBookDelete
    }))
  }

  changeQuantity = async (BookId, Quantity) => {
    const { token, idUser, idCart } = this.props;
    const info = { BookId, UserId: idUser, Quantity }
    console.log("Info: ", info);

    try {
      var data = await callAPI(`api/basket/${idCart}`, 'PUT', info, token);
      this.props.getCart({ basketId: idCart, userId: idUser, token });
      this.setState(prevState => ({
        ...prevState,
        successMess: 'Đặt sách thành công',
      }))
    } catch (error) {

      this.setState(prevState => ({
        ...prevState,
        error: error.response.data.Message
      }))

    }
  }

  order = async () => {
    const { token, idUser, idCart } = this.props;
    const info = { ShippingAddress: '', ShippingRequired: false, UserId: idUser, Note: '' }
    console.log("Info: ", info);

    try {
      var data = await callAPI('api/orders', 'POST', info, token);
      this.props.getCart({ basketId: idCart, userId: idUser, token });
    } catch (error) {

      this.setState(prevState => ({
        ...prevState,
        error: error.response.data.Message
      }))

    }
  }

  render() {
    console.log("Cart: ", this.props.cart);
    const { askDelete, deleteSuccess, successMess, error } = this.state;
    return (
      <>
        <View style={{ marginBottom: 45 }}>
          <FlatList
            data={this.props.cart}
            renderItem={({ item }) => (
              <ItemCart
                item={item.Book}
                quantity={item.Quantity}
                navigateToDetail={this.navigateToDetail}
                deleteItemCart={this.changeAskDelete}
                changeQuantity={this.changeQuantity}
              />
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginHorizontal: 15 }}
          />
          <ModalAddCart
            modalVisible={askDelete}
            setModalVisible={this.changeAskDelete}
            text='Bạn có chắc chắn muốn xóa sách này khỏi giỏ hàng không?'
            textButton='Có'
            textButton2='Không'
            navigateToCall={this.deleteItemCart}
          />
          <ModalAddCart
            modalVisible={(successMess != '' || error != '') ? true : false}
            navigateToCall={this.changeDeleteSuccess}
            text={successMess || error}
            textButton='Đã hiểu'
          />
        </View>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
          <TouchableOpacity style={styles.btnOrder} onPress={this.order}>
            <Text style={styles.btnText}>Đặt sách</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  btnOrder: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666"
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20
  }
})

function mapStateToProps(state) {
  return {
    idCart: state.authReducer.idCart,
    cart: state.authReducer.cart,
    idUser: state.authReducer.user.Id,
    token: state.authReducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: ({ basketId, userId, token }) => dispatch(userActions.getCart({ basketId, userId, token })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
