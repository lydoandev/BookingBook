import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import { Star } from '../../components/Star';
import ListBook from '../../components/ListBook';
import { books } from '../../data/dataDemo';

export default class Detail extends Component {
  render() {
    var { Authors, Title, OverallStarRating, Price, Quantity, TotalReview, Content } = this.props.item;
    return (
      <ScrollView style={styles.content}>
        <View style={styles.info}>
          <Image source={{ uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472875711i/10419181._UY630_SR1200,630_.jpg' }}
            style={styles.book_img}>
          </Image>
          <Text style={styles.title}>{Title}</Text>
          <Text style={styles.author}>{Authors[0].Name}</Text>
          <Star star={OverallStarRating} TotalReview={TotalReview}></Star>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Text style={styles.textContent}>{Content}</Text>
        </View>
        <ListBook title='Sách tương tự' data={books}></ListBook>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 15,
  },
  book_img: {
    width: 165,
    height: 220,
    borderRadius: 6
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 18
  },
  author: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    color: '#ababab'
  },
  textContent: {
    color: '#7f7f7f'
  }
})


