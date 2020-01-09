import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import * as authActions from '../../reduxs/authRedux/actions';
import { booksProfile } from '../../data/dataProfile'
import BookBorrowing from './BookBorrowing';
import InforUser from './InforUser';
import BookWaiting from './BookWaiting';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.props.fetProfile();
  }

  render() {
    console.log('PROP PROFILE:', booksProfile[0]);
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
    fetProfile: () => dispatch(authActions.fetchProfile()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
