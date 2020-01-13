import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { Dimensions } from "react-native";
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabMenuBook from '../../components/Profile/TabMenuBook';
import BookRequest from './BookRequest';

export default class InfoUser extends Component {
  render() {
    const tabSubMenu = <TabMenuBook booksProfile={this.props.booksProfile}></TabMenuBook>
    const bookRequest = <BookRequest booksProfile={this.props.booksProfile}></BookRequest>
    return (
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2017/11/10/22/44/christmas-2937873__340.jpg' }}>
          <View style={styles.styleFirstRow}>
            <View>
              <Image style={styles.styleQRCode} source={require('../../assets/images/QRcode.png')}></Image>
            </View>
            <View>
              <Image style={styles.styleSetting} source={require('../../assets/images/settingProfile.png')}></Image>
            </View>
          </View>
          <View style={styles.info}>

            <Image style={styles.avatar} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpBEf6Zmjl40AHZpsNq32fnSw5MaZbwLz_-clppwuTjBLqWQE&s' }}></Image>
            <Image style={styles.styleImageLevel} source={require('../../assets/images/titanlevel.png')}></Image>
            <Text style={styles.textTitle}>{this.props.booksProfile.FullName}</Text>
            <TouchableOpacity style={styles.styleRank}>
              <Text style={styles.textRank}>Platinum</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
        <ScrollView>
          <View style={{ height: 300 }}>
            <ScrollableTabView
              // style={{ marginTop: '70%' }}
              initialPage={0}
              renderTabBar={() => <ScrollableTabBar style={{ borderWidth: 0 }} />}>
              <View style={styles.tabBarMenu} tabLabel='Sách của bạn'>
                {tabSubMenu}
              </View>
              <View style={styles.tabBarMenu} tabLabel='Yêu cầu sách'>
                {bookRequest}
              </View>
              <View style={styles.tabBarMenu} tabLabel='Gói thành viên'>
                <Text>Gói thành viên </Text>
              </View>
            </ScrollableTabView>
          </View>
        </ScrollView>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    position: "relative",
    // flex: 1,
    height: 400,
  },
  styleFirstRow: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  styleQRCode: {
    borderRadius: 80,
    height: 50,
    width: 50,
  },
  styleSetting: {
    height: 40,
    width: 40,
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
    left: 120,
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
  info: {
    padding: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
  },
  content: {
    flex: 1
  }
})
