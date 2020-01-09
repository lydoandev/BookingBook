import React, { Component } from 'react'
import LogIn from './LogIn';
import Register from './Register'
import { connect } from 'react-redux'
import * as userActions from '../../reduxs/authRedux/actions'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }

  login = (user) => {
    console.log("User 1:", user);

    this.props.login(user)
  }
  register = (user) => {
    this.props.register(user)
  }

  changeState = () => {
    this.setState(prevState => ({
      ...prevState,
      isLogin: !prevState.isLogin
    }))
  }
  render() {
    const { isLogin } = this.state;
    const { loading, error } = this.props.data;

    if (isLogin) {
      return <LogIn changeState={this.changeState} login={this.login} loading={loading} error={error}></LogIn>
    } else
      return (
        <Register changeState={this.changeState} register={this.register} loading={loading} error={error}></Register>
      )
  }
}

function mapStateToProps(state) {
  console.log("Satte: ", state)
  return {
    data: state.authReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(userActions.login(user)),
    register: (user) => dispatch(userActions.register(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
