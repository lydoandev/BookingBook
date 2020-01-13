import React, { Component } from 'react'
import { connect } from 'react-redux'
import InforUser from './InforUser';
import Auth from '../../screens/AuthScreen'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, } from 'react-native';
import TabMenuBook from '../../components/Profile/TabMenuBook';
import { booksProfile } from '../../data/dataProfile'

class Profile extends Component {
  render() {
    const inforUser = <InforUser booksProfile={booksProfile[0]}></InforUser>;
    const isAuthenticated = this.props.isAuthenticated;

    if (isAuthenticated) {
      return (
        <ScrollView style={styles.container}>
          {inforUser}
        </ScrollView >
      )
    } else return (<Auth></Auth>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  }
}

function mapStateToProps(state) {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
