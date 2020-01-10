import React, { Component } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import StarIcon from './StarIcon'

export default class Comment extends Component {
  render() {
    const { UserName, StarRating, UrlImageUser, Content } = this.props.item;

    return (
      <View style={{ flexDirection: 'row', marginBottom: 10, }}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: UrlImageUser || 'https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024' }}
            style={styles.book_img} />
        </View>
        <View style={{ flex: 4 }}>
          <Text>{UserName}</Text>
          <View style={{ marginTop: 5 }}>
            <StarIcon star={StarRating}></StarIcon>
          </View>
          <Text style={{ color: '#7f7f7f', marginTop: 10, }}>
            {Content}
          </Text>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  book_img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
