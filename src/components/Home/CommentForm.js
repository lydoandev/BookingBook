import React, { Component } from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native'

export default class CommentForm extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.setModalVisible();
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <Text style={{ textAlign: 'center' }}>Đánh giá</Text>
            <View style={styles.buttonContent}>
              <TouchableOpacity
                style={styles.btnAnother}
                onPress={() => {
                  this.props.setModalVisible();
                }}>
                <Text style={styles.anotherText}>{textButton2 || 'Lúc khác'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnRegister, { display: textButton ? 'flex' : 'none' }]}
                onPress={this.navigateTo}>
                <Text style={styles.registerText}>{textButton}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },

  contentContainer: {
    backgroundColor: '#ffffff',
    width: "90%",
    borderRadius: 10,
    padding: 20
  },

  buttonContent: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },

  btnAnother: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff6666'
  },
  anotherText: {
    color: '#ff6666',
    textAlign: 'center',
  },
  btnRegister: {
    width: 100,
    justifyContent: 'center',
    backgroundColor: '#ff6666',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
  }
})