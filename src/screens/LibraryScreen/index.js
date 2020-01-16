import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Library extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={require('../../assets/images/backLibrary.png')}></Image>
        <View style={styles.info}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={styles.title}>The Library</Text>
            <Text style={{ color: '#fff', marginVertical: 5 }}>www.thebook.com</Text>

            <Text style={{ color: '#fff', textAlign: 'center' }}>
              Think back over your life. Think about the people that had a positive influence on you. If your past…
              Think back over your life.
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
              <Icon name='instagram' size={27} color='#fff' style={styles.social}></Icon>
              <Icon name='facebook' size={26} color='#fff' style={styles.social}></Icon>
              <Icon name='youtube-play' size={27} color='#fff' style={styles.social}></Icon>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View></View>
              <Image source={require('../../assets/images/backLibrary.png')} style={styles.imgLibrary}></Image>
              <View></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    position: "relative"
  },
  info: {
    position: 'absolute',
    top: 20,
    marginHorizontal: 20
  },
  title: {
    color: '#fff',
    fontSize: 23,
    fontWeight: "bold"
  },
  social: {
    marginHorizontal: 13
  },
  imgLibrary: {
    width: 100,
    height: 100,
    borderRadius: 75
  }
})
