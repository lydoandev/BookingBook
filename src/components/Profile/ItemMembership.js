import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ItemMembership extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Text style={styles.styleTextTitle}>{this.props.title}</Text>
        <Text style={styles.styleTextValue}>{this.props.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  styleTextTitle: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20
  },
  styleTextValue: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
