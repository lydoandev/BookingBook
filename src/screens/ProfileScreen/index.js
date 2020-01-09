import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoUser from './InfoUser';
import * as userActions from '../../reduxs/authRedux/actions'
import Auth from '../../screens/AuthScreen'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View } from 'native-base';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, } from 'react-native'

import BookWaiting from './BookWaiting';
import { booksProfile } from '../../data/dataProfile'

import BookBorrowing from './BookBorrowing';


class Profile extends Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    if (isAuthenticated) {
      return (
        <ScrollView style={styles.container}>
          <InforUser booksProfile={booksProfile[0]}></InforUser>
          <View style={styles.styleRowContent}>
            <BookBorrowing booksProfile={booksProfile[0]}></BookBorrowing>
          </View>
          <View style={styles.styleRowContent}>
            <BookWaiting booksProfile={booksProfile[0]}></BookWaiting>
          </View>
        </ScrollView>
      )
    } else return (<Auth></Auth>)
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleRowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  }

})


function mapStateToProps(state) {
  return {
    data: state.authReducer,
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
