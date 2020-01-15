import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import BookWaiting from '../../screens/ProfileScreen/BookWaiting'
import BookBorrowing from '../../screens/ProfileScreen/BookBorrowing';
import BookLoving from '../../screens/ProfileScreen/BookLoving';
import { connect } from 'react-redux';
import callAPI from '../../utils/callAPI';


class TabMenuBook extends Component {
  constructor(props) {
    super(props);
    this.getBookBorrowing();
    this.state = {
      index: 1,
      bookBorrowing: [],
      bookWaiting: [],
      bookFollowing: []
    }
  }

  onPressBorrowingBook = () => {
    this.setState({
      index: 1
    })
  }
  getBookBorrowing = async () => {
    const { token } = this.props;
    try {
      var data = await callAPI(`api/orders`, 'GET', null, token);
      if (data !== null) {
        this.setState((prevState) => ({
          ...prevState,
          index: 1,
          bookBorrowing: data.data.Orders[0].Items,
        }))
      }
    } catch (error) {
      console.log('ERROR GET USER:', error);
    }
  }

  getBookWaiting = async () => {
    const { idUser, token } = this.props;
    try {
      var data = await callAPI(`api/users/${idUser}`, 'GET', null, token);
      this.setState((prevState) => ({
        ...prevState,
        index: 2,
        bookWaiting: data.data.WaitingBooks,
      }))
    } catch (error) {
      console.log('ERROR GET USER:', error);
    }
  }

  getBookFollowing = async () => {
    const { idUser, token } = this.props;
    try {
      var data = await callAPI(`api/users/${idUser}/followingbooks`, 'GET', null, token);
      this.setState((prevState) => ({
        ...prevState,
        index: 3,
        bookFollowing: data.data.Data
      }))
    } catch (error) {
      console.log('ERROR GET USER:', error);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.styleTabMenu}>
          <TouchableOpacity style={this.state.index == 1 ? [styles.selectButton, styles.tabBarMenu] : styles.tabBarMenu} onPress={this.getBookBorrowing}>
            <Text style={this.state.index == 1 ? styles.textTabMenuSelected : styles.textTabMenu} onPress={this.getBookBorrowing}>Đang mượn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.index == 2 ? [styles.selectButton, styles.tabBarMenu] : styles.tabBarMenu} onPress={this.getBookWaiting}>
            <Text style={this.state.index == 2 ? styles.textTabMenuSelected : styles.textTabMenu} onPress={this.getBookWaiting}>Đang chờ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.index == 3 ? [styles.selectButton, styles.tabBarMenu] : styles.tabBarMenu} onPress={this.getBookFollowing}>
            <Text style={this.state.index == 3 ? styles.textTabMenuSelected : styles.textTabMenu} onPress={this.getBookFollowing}>Yêu thích</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.styleRowContent}>
          {this.state.index == 1 && <BookBorrowing bookBorrowing={this.state.bookBorrowing}></BookBorrowing> || this.state.index == 2 &&
            <BookWaiting bookWaiting={this.state.bookWaiting}></BookWaiting> ||
            this.state.index == 3 && <BookLoving bookFollowing={this.state.bookFollowing} componentId={this.props.componentId}></BookLoving>}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  styleTabMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarMenu: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#ffffff',
  },
  textTabMenu: {
    fontSize: 18,
    color: '#5bc2ef',
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova'
  },
  selectButton: {
    borderColor: '#5bc2ef',
    backgroundColor: '#5bc2ef',
  },
  textTabMenuSelected: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova'
  },
  styleRowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '100%'
  },
})

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    idUser: state.authReducer.user.Id,
    token: state.authReducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabMenuBook);

