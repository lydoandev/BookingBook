import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { connect } from 'react-redux'
import * as userActions from '../../reduxs/authRedux/actions'
import Input from '../../components/Profile/Input';
import callAPI from '../../utils/callAPI';
import { Navigation } from 'react-native-navigation';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.onPressUpdateProfile();
    const { FirstName, LastName, PhoneNumber, Email, Address, Gender, DateOfBirth, Position, TotalPoint } = this.props.user;
    this.state = {
      FirstName,
      LastName,
      PhoneNumber,
      Email,
      Address,
      Gender,
      DateOfBirth,
      Position,
      TotalPoint,
    }
  }

  getData = (name, text) => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: text
    }))
  }
  onPressUpdateProfile = async () => {
    const { idUser, token } = this.props;
    const { FirstName, LastName, PhoneNumber, Email, Address, Gender, DateOfBirth, Position, TotalPoint } = this.state;
    var user = {
      FirstName,
      LastName,
      PhoneNumber,
      Email,
      Address,
      Gender,
      DateOfBirth,
      Position,
      TotalPoint,
    }
    try {
      await callAPI(`api/users/${idUser}/updateprofile`, 'PUT', user, token);
      Navigation.dismissModal(this.props.componentId);
    } catch (error) {
      console.log('ERROR PUT PROFILE:', error);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.Gender !== prevProps.Gender) {
      console.log('GENDER', this.props.Gender);

      const { Gender } = this.props;
      this.setState({
        Gender
      })
    }
  }

  render() {
    console.log('USER AT PERSONAL INFOR', this.props);
    const { FirstName, LastName, PhoneNumber, Email, Address, Gender, DateOfBirth, Position, TotalPoint } = this.state;


    return (
      <ScrollView style={styles.container}>
        <Text style={styles.styleTitle}>First name</Text>
        <Input name='FirstName' getData={this.getData} value={FirstName}></Input>
        <Text style={styles.styleTitle}>Last name</Text>
        <Input name='LastName' getData={this.getData} value={LastName}></Input>
        <Text style={styles.styleTitle}>Phone number</Text>
        <Input name='PhoneNumber' getData={this.getData} value={PhoneNumber}></Input>
        <Text style={styles.styleTitle}>Email</Text>
        <Input name='Email' getData={this.getData} value={Email}></Input>
        <Text style={styles.styleTitle}>Address</Text>
        <Input name='Address' getData={this.getData} value={Address}></Input>
        <Text style={styles.styleTitle}>Giới tính</Text>
        <View style={styles.rowRadioButton}>
          <RadioButton.Group
            onValueChange={Gender => this.setState({ Gender })}
            value={Gender}
          >
            <View style={styles.rowRadioButton}>
              <RadioButton value="Male" />
              <Text>Nam</Text>
            </View>
            <View style={styles.rowRadioButton}>
              <RadioButton value="Female" />
              <Text>Nữ</Text>
            </View>
          </RadioButton.Group>
        </View>
        <Text style={styles.styleTitle}>Date of birth</Text>
        <Input name='DateOfBirth' getData={this.getData} value={DateOfBirth}></Input>
        <Text style={styles.styleTitle}>Position</Text>
        <Input name='Position' getData={this.getData} value={Position}></Input>
        <Text style={styles.styleTitle}>Total Point</Text>
        <Input name='TotalPoint' getData={this.getData} value={TotalPoint}></Input>
        <TouchableOpacity style={styles.styleButton} onPress={this.onPressUpdateProfile}>
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
    marginBottom: 20
  },
  rowRadioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 150,
    marginBottom: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
