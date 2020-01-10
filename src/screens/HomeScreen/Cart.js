import React, { Component } from 'react'
import { FlatList } from 'react-native'
import ItemBook from '../../components/Home/ItemBook'
import navigateTo from '../../utils/navigateTo';
import * as userActions from '../../reduxs/authRedux/actions'
import { connect } from 'react-redux';


class Cart extends Component {
  navigateToDetailCall = item => {
    navigateTo({
      item
    }, this.props.componentId, 'Detail', {
      rightButtons: {
        id: 'favorite',
        icon: require('../../assets/images/heart.png'),
      },
    });
  };
  render() {
    console.log("Cart: ", this.props.cart);

    return (
      <FlatList
        data={this.props.cart}
        renderItem={({ item }) => (
          <ItemBook
            item={item.Book}
            flex='row'
            navigateToDetail={this.navigateToDetail}
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 15 }}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.authReducer.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCart: (cart) => dispatch(userActions.setCart(cart)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
