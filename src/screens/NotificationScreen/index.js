import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import ItemNotifi from '../../components/Notification/ItemNotifi'
import { connect } from 'react-redux'
import callAPI from '../../utils/callAPI'
import Auth from '../AuthScreen'
import * as userActions from '../../reduxs/authRedux/actions'

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllNotifi: false,
      seenAll: false
    }
    this.getNotifications();
  }

  getNotifications = () => {
    const { token, isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.getNotifications(token);
    }
  }

  componentDidUpdate(prevProps) {

    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.getNotifications();
    }
  }

  updateSeen = async (id) => {
    const { token } = this.props;
    const { seenAll } = this.state;
    var info = {
      Ids: [
        id
      ],
      IsSeenAll: seenAll
    }
    console.log("Update: ", info);

    try {
      var data = await callAPI(
        `api/usernotifications/seen`,
        'PUT',
        info,
        token
      );
      console.log("Result: ", data);

      this.getNotifications();
    } catch (error) {
      console.log("Error get update: ", error);

    }
  }

  seenAll = () => {
    this.setState(prevState => ({
      ...prevState,
      seenAll: true
    }), () => this.updateSeen())
  }
  render() {
    const { isAuthenticated, notifications, loading } = this.props;
    console.log("Noti: ", notifications);
    if (isAuthenticated) {
      if (loading) {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size="large" color="#ff6666" style={{ flex: 1 }} />
          </View>
        );
      } else {
        return (
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={this.seenAll}>
              <Text
                style={{ alignSelf: 'flex-end', color: '#ababab', fontSize: 15, paddingRight: 15, paddingBottom: 15 }}

              >
                Đánh dấu tất cả là đã đọc
            </Text>
            </TouchableOpacity>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={notifications}
              renderItem={({ item }) => (
                <ItemNotifi
                  item={item}
                  updateSeen={this.updateSeen}
                />
              )} />
          </View>
        )
      }
    } else return (<Auth></Auth>)

  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    token: state.authReducer.token,
    cart: state.authReducer.cart,
    notifications: state.authReducer.notifications,
    loading: state.authReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNotifications: (token) => dispatch(userActions.getNotifications(token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
