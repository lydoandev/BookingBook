import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import BookWaiting from '../../screens/ProfileScreen/BookWaiting'
import BookBorrowing from '../../screens/ProfileScreen/BookBorrowing';
import BookLoving from '../../screens/ProfileScreen/BookLoving';

export default class TabMenuBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1
    }
  }

  onPressBorrowingBook = () => {
    this.setState({
      index: 1
    })
  }
  onPressWaitingBook = () => {
    this.setState({ index: 2 })
  }
  onPressLovingBook = () => {
    this.setState({ index: 3 })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.styleTabMenu}>
          <TouchableOpacity style={this.state.index == 1 ? [styles.selectButton, styles.tabBarMenu] : styles.tabBarMenu}>
            <Text onPress={this.onPressBorrowingBook} style={this.state.index == 1 ? styles.textTabMenuSelected : styles.textTabMenu}>Đang mượn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.index == 2 ? [styles.selectButton, styles.tabBarMenu] : styles.tabBarMenu}>
            <Text style={this.state.index == 2 ? styles.textTabMenuSelected : styles.textTabMenu} onPress={this.onPressWaitingBook}>Đang chờ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.index == 3 ? [styles.selectButton, styles.tabBarMenu] : styles.tabBarMenu}>
            <Text style={this.state.index == 3 ? styles.textTabMenuSelected : styles.textTabMenu} onPress={this.onPressLovingBook}>Yêu thích</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.styleRowContent}>
          {this.state.index == 1 && <BookBorrowing booksProfile={this.props.booksProfile}></BookBorrowing> || this.state.index == 2 && <BookWaiting booksProfile={this.props.booksProfile}></BookWaiting> || this.state.index == 3 && <BookLoving booksProfile={this.props.booksProfile}></BookLoving>}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  styleTabMenu: {
    flex: 1,
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
    paddingHorizontal: 10
  },
})
