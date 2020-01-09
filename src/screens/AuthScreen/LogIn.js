import React, { Component } from 'react'
import { Keyboard, View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from "react-native"
import InputText from '../../components/Form/InputText'
import Title from '../../components/Form/Title'
import Error from '../../components/Form/Error'

import * as userAction from '../../reduxs/authRedux/actions'

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "thahthanh968@gmail.com",
      password: "990124dtt",
      emailErr: "",
      passwordErr: ""
    }
  }

  getData = (name, text) => {
    this.setState({
      [name]: text
    })
  }

  checkValidation = () => {
    var { email, password, emailErr, passwordErr } = this.state;
    console.log("Email: ", email);
    console.log("Password: ", password);
    var countErr = 0;
    emailErr = "";
    passwordErr = "";
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email == "") {
      countErr++;
      emailErr = "Email is required";
    } else if (!re.test(String(email).toLowerCase())) {
      countErr++;
      emailErr = "Email is incorrect format";
    }

    if (password == "") {
      countErr++;
      passwordErr = "Password is required";
    }

    this.setState({
      emailErr,
      passwordErr
    })

    return countErr;
  }


  login = () => {
    Keyboard.dismiss();
    const { email, password } = this.state;

    if (this.checkValidation() == 0) {
      console.log("Không lỗi")
      this.props.login({ grant_type: "password", username: email, password });
    } else { console.log("Lỗi") }
  }

  signUp = () => {
    this.props.changeState();
  }

  render() {
    var { password, email, emailErr, passwordErr } = this.state;
    var { loading, error } = this.props;
    if (loading) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size="large" color="#ff6666" style={{ flex: 1 }} />
        </View>
      )
    }
    return (
      <ScrollView style={{ flex: 1, margin: 15, flexDirection: 'column' }}>

        <View style={styles.titleContent}><Text style={{ fontSize: 25 }}>Chưa Có Tài Khoản</Text></View>
        <Error errorText={error}></Error>
        <View style={{ flex: 1, marginTop: 20, marginBottom: 5 }}>
          <Title title="Email *"></Title>
          <InputText name="email" value={email} getData={this.getData}></InputText>
          <Error errorText={emailErr} />
        </View>
        <View style={{ flex: 1, marginBottom: 5, }}>
          <Title title="Mật khẩu *"></Title>
          <InputText pass={true} name="password" value={password} getData={this.getData}></InputText>
          <Error errorText={passwordErr}></Error>
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.btnLogin} onPress={this.login}><Text style={styles.loginText}>LOGIN</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnSignUp} onPress={this.signUp}><Text style={styles.signUpText}>SIGN UP</Text></TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  titleContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20
  },
  btnSignUp: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff6666'
  },
  signUpText: {
    color: '#ff6666',
    textAlign: 'center',
  },
  btnLogin: {
    width: 100,
    justifyContent: 'center',
    backgroundColor: '#ff6666',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
  }
})

