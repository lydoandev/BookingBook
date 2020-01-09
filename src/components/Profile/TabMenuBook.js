import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class TabMenuBook extends Component {
  render() {
    return (
      <View style={styles.styleTabMenu}>
        <TouchableOpacity style={styles.tabBarMenu}>
          <Text style={[styles.textRank, styles.textTabMenu]}>Đang mượn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarMenu}>
          <Text style={[styles.textRank, styles.textTabMenu]}>Đang chờ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarMenu}>
          <Text style={[styles.textRank, styles.textTabMenu]}>Yêu thích</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  styleTabMenu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  tabBarMenu: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // top: 330
  },
  textTabMenu: {
    fontSize: 18
  },
  textRank: {
    color: '#5bc2ef',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova'
  },
})
