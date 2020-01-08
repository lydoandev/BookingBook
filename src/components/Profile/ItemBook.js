import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class ItemBook extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.book_item]}>
        <Image source={{ uri: 'https://sachvui.com/cover/2019/truyen-tranh-doremon-mau.jpg' }} style={styles.book_img}></Image>
        <View style={styles.styleContent}>
          <Text style={styles.title}>Để con được ốm</Text>
          <Text style={styles.time}>Hạn trả: 20-5-2019</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  book_item: {
    marginVertical: 20,
    width: 175,
  },
  book_img: {
    width: 155,
    height: 210,
    borderRadius: 10
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 17
  },
  time: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 15,
    color: '#ababab'
  },
  styleContent: {
    flexDirection: 'column',
    margin: 5
  }
})
