import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import callAPI from '../../utils/callAPI';
import Error from '../../components/Form/Error'
import { Navigation } from 'react-native-navigation';

class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPassword: '',
      Password: '',
      ConfirmedPassword: '',
      currentPassErr: '',
      passsErr: '',
      confirmedPassErr: ''
    }
  }

  checkValidation = () => {
    var { CurrentPassword, Password, ConfirmedPassword, currentPassErr, passsErr, confirmedPassErr } = this.state;
    currentPassErr = "";
    passsErr = '';
    confirmedPassErr = '';
    var countErr = 0;

    if (CurrentPassword == "") {
      countErr++;
      currentPassErr = "Current password is required";
    }

    if (Password == "") {
      countErr++;
      passsErr = "Password is required";
    }

    if (ConfirmedPassword == "") {
      countErr++;
      confirmedPassErr = "Confirm password is required";
    }

    if (ConfirmedPassword !== Password) {
      countErr++;
      confirmedPassErr = "Confirm password dose not match!";
    }
    this.setState((prevState) => ({
      ...prevState,
      currentPassErr,
      passsErr,
      confirmedPassErr
    }))
    return countErr;
  }

  changePass = async () => {
    const { idUser, token } = this.props;
    try {
      console.log('STATE', this.state);
      const { CurrentPassword, Password, ConfirmedPassword } = this.state;
      var body = {
        CurrentPassword,
        Password,
        ConfirmedPassword
      }
      const data = await callAPI(`api/users/${idUser}/password/change`, 'PUT', body, token);
      console.log(data);

    } catch (error) {
      this.setState((prevState) => ({
        ...prevState,
        currentPassErr: "Mật khẩu hiện tại không đúng!"
      }))
      console.log('CHANGE PASS:', error.response);
    }
  }

  onPressChangePass = () => {
    if (this.checkValidation() == 0) {
      this.changePass();
      Navigation.dismissModal(this.props.componentId);
    }
  }
  render() {
    var { currentPassErr, passsErr, confirmedPassErr } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.styleTitle}>Currently Password</Text>
        <TextInput
          style={styles.styleInput}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState((prevState) => ({
            ...prevState,
            CurrentPassword: text
          }))}
        ></TextInput>
        <Error errorText={currentPassErr}></Error>
        <Text style={styles.styleTitle}>Password</Text>
        <TextInput
          style={styles.styleInput}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState((prevState) => ({
            ...prevState,
            Password: text
          }))}
        ></TextInput>
        <Error errorText={passsErr}></Error>
        <Text style={styles.styleTitle}>Confirm Password</Text>
        <TextInput
          style={styles.styleInput}
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setState((prevState) => ({
            ...prevState,
            ConfirmedPassword: text
          }))}
        ></TextInput>
        <Error errorText={confirmedPassErr}></Error>
        <TouchableOpacity style={styles.styleButton} onPress={this.onPressChangePass}>
          <Text style={styles.styleTextButton}>Gửi yêu cầu</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15,
    padding: 20,
  },
  styleTitle: {
    fontSize: 20,
    fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    marginBottom: 10,
  },
  styleInput: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
  },
  styleTextButton: {
    fontSize: 20,
    fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'center'
  },
  styleButton: {
    height: 70,
    backgroundColor: '#39b8c2',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0
  }
})


function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    idUser: state.authReducer.user.Id,
    token: state.authReducer.token,
    user: state.authReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);

