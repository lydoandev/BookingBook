import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Auth from '../AuthScreen'
class Order extends Component {

  render() {
    const isAuthenticated = this.props.isAuthenticated;
    if (isAuthenticated) {
      return (
        <View><Text>Đã login</Text></View>
      )
    } else return (<Auth></Auth>)
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(userActions.login()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
