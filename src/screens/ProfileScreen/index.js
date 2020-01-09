import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoUser from './InfoUser';
import * as userActions from '../../reduxs/authRedux/actions'
import Auth from '../../screens/AuthScreen'
import { View } from 'native-base';
import { TouchableOpacity, Text } from 'react-native';
class Profile extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    if (isAuthenticated) {
      return (
        <View>
          <InfoUser></InfoUser>
          <TouchableOpacity onPress={this.props.logout}>
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        </View>
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
    register: () => dispatch(userActions.register()),
    logout: () => dispatch(userActions.logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);