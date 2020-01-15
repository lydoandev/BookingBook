import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Auth from '../AuthScreen'
import callAPI from '../../utils/callAPI'
import ItemOrder from '../../components/Order/ItemOrder'
import InfoOrder from '../../components/Order/InfoOrder'
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      orders: [],
      item: {},
      modalVisible: false
    }
    this.getOrders();
  }

  componentDidUpdate(prevProps) {
    if (this.props.token !== prevProps.token) {
      this.getOrders();
    }
  }

  openModalInfo = (item) => {
    this.setState(prevState => ({
      ...prevState,
      item,
      modalVisible: true
    }))
  }

  setModalVisible = () => {
    this.setState(prevState => ({
      ...prevState,
      modalVisible: false
    }))
  }

  getOrders = async () => {
    const { token } = this.props;
    this.setState({
      loading: true,
    });
    try {
      var data = await callAPI(
        `api/orders`,
        'GET',
        null,
        token
      );
      console.log("Data: ", data.data.Orders);

      var orders = [];
      data.data.Orders.map(order => {
        order.Items.map(item => {
          orders.push(item)
        })
      })

      this.setState({
        loading: false,
        orders: orders,
        idOrder: data.data.Orders[0].Id
      });
    } catch (error) {
      console.log("Error: ", error.response.data.Message);
    }
  }

  updateStatus = async (id, status) => {
    const { idOrder } = this.state;
    const { token } = this.props;
    var info = { OrderItemStatus: status, OrderItemIds: [id] }
    try {
      var data = await callAPI(
        `api/orders/${idOrder}/setstatus`,
        'PUT',
        info,
        token
      );
      this.setModalVisible();
      this.getOrders();
    } catch (error) {
      console.log("Error: ", error.response.data.Message);
    }
  }

  render() {
    const isAuthenticated = this.props.isAuthenticated;
    const { modalVisible, item } = this.state;

    if (isAuthenticated) {
      const { orders } = this.state;
      console.log("Order: ", orders);
      return (
        <>
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <ItemOrder item={item} openModalInfo={this.openModalInfo}></ItemOrder>
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
          <InfoOrder
            modalVisible={modalVisible}
            setModalVisible={this.setModalVisible}
            item={item}
            updateStatus={this.updateStatus}
          ></InfoOrder>
        </>
      )
    } else return (<Auth></Auth>)
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    token: state.authReducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(userActions.login()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
