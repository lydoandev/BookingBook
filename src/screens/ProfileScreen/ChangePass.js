import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default class ChangePass extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.styleTitle}>Currently Password</Text>
        <TextInput
          style={styles.styleInput}
          underlineColorAndroid='transparent'
        ></TextInput>
        <Text style={styles.styleTitle}>Password</Text>
        <TextInput
          style={styles.styleInput}
          underlineColorAndroid='transparent'
        ></TextInput>
        <Text style={styles.styleTitle}>Confirm Password</Text>
        <TextInput
          style={styles.styleInput}
          underlineColorAndroid='transparent'
        ></TextInput>
        <TouchableOpacity style={styles.styleButton}>
          <Text style={styles.styleTextButton}>Gửi yêu cầu</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15,
    padding: 20,
  },
  styleTitle: {
    fontSize: 20,
    fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    marginBottom: 10,
  },
  styleInput: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 20
  },
  styleTextButton: {
    fontSize: 20,
    fontFamily: 'SVN-ProximaNova',
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'center'
  },
  styleButton: {
    height: 70,
    backgroundColor: '#39b8c2',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0
  }
})
