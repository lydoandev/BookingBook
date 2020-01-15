import React, { Component } from 'react'
import { connect } from 'react-redux'
import InforUser from './InforUser';
import Auth from '../../screens/AuthScreen'
import { StyleSheet, ScrollView } from 'react-native';
import navigateTo from '../../utils/navigateTo';
import { Navigation } from 'react-native-navigation';
import { View } from 'native-base';
import * as userActions from '../../reduxs/authRedux/actions'

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  navigationButtonPressed = ({ buttonId }) => {
    console.log('VO DAY');
    const { componentId } = this.props;
    if (buttonId === 'close') {
      Navigation.dismissModal(componentId);
    }
  };

  render() {
    const inforUser = <InforUser user={this.props.user} componentId={this.props.componentId}></InforUser>;
    const isAuthenticated = this.props.isAuthenticated;
    if (isAuthenticated) {
      return (
        <View style={styles.container}>
          {inforUser}
        </View >
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
    user: state.authReducer.user
  }
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
