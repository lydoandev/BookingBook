import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from "react-native";
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ItemBook from '../../components/Profile/ItemBook';


export default class Profile extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2017/11/10/22/44/christmas-2937873__340.jpg' }}></Image>
        <View style={styles.styleFirstRow}>
          <Image style={styles.styleQRCode} source={require('../../assets/images/QRcode.png')}></Image>
          <Image style={styles.styleSetting} source={require('../../assets/images/settingProfile.png')}></Image>

        </View>
        <View style={styles.info}>
          <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpBEf6Zmjl40AHZpsNq32fnSw5MaZbwLz_-clppwuTjBLqWQE&s' }}></Image>
          <Image style={styles.styleImageLevel} source={require('../../assets/images/titanlevel.png')}></Image>
          <Text style={styles.textTitle}>Dinh Thi Thanh</Text>
          <TouchableOpacity style={styles.styleRank}>
            <Text style={styles.textRank}>Platinum</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.styleRowContent}>
          <ItemBook></ItemBook>
        </View>
        {/* <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10, paddingTop: 20, paddingHorizontal: 10 }}>
          <Icon name="envelope" size={30} color="#bc2051"></Icon>
          <Text style={{ paddingHorizontal: 10, }}>thahthanh968@gmail.com</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10, paddingTop: 20, paddingHorizontal: 10 }}>
          <Icon name="phone-square" size={30} color="#21e051"></Icon>
          <Text style={{ paddingHorizontal: 10, }}>0968754908</Text>
        </View> */}
        {/* <TouchableOpacity style={styles.visitSite} onPress={this.onPressLogOut}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>LOG OUT</Text>
        </TouchableOpacity> */}
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleFirstRow: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {
    position: "relative",
    flex: 1,
    height: 400,
  },
  styleQRCode: {
    borderRadius: 80,
    height: 50,
    width: 50,
    top: 8
  },
  styleSetting: {
    left: (Dimensions.get('window').width / 2) + 90,
    height: 40,
    width: 40,
    top: 10
  },
  info: {
    padding: 10,
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: "column",
  },
  avatar: {
    borderRadius: 70,
    height: 140,
    top: 30,
    width: 140,
    left: 120,
  },
  styleImageLevel: {
    borderRadius: 80,
    height: 50,
    width: 50,
    left: 165,
  },
  textTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center",
    left: Dimensions.get('window').width / 3.5,
    fontFamily: 'SVN-ProximaNova'
  },
  styleRank: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    borderRadius: 50,
    left: Dimensions.get('window').width / 3.5
  },
  textRank: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova'
  },
  styleRowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  }
  // visitSite: {
  //   backgroundColor: '#FC4C50',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   height: 50,
  //   flexDirection: 'row',
  //   paddingVertical: 10
  // }
})