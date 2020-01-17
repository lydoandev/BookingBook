import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Star} from './Star';

export default class ItemBook extends Component {
  navigateToDetail = () => {
    const {item} = this.props;

    this.props.navigateToDetail(item);
  };
  render() {
    var star = 4;
    var {flex} = this.props;
    var {
      Authors,
      Title,
      OverallStarRating,
      Price,
      Quantity,
      TotalReview,
      Medias,
    } = this.props.item;
    return (
      <TouchableOpacity
        style={[styles.book_item, {flexDirection: flex}]}
        onPress={this.navigateToDetail}>
        <Image source={{uri: Medias[0].ImageAppUrl}} style={styles.book_img} />
        <View
          style={{flexDirection: 'column', marginTop: flex == 'row' ? 20 : 5}}>
          <Text style={styles.title} numberOfLines={1}>
            {Title}
          </Text>
          <Text style={styles.author}>{Authors[0].Name}</Text>
          <Star star={OverallStarRating} TotalReview={TotalReview} />
          <View
            style={{
              flexDirection: 'row',
              display: flex == 'row' ? 'flex' : 'none',
              marginTop: 20,
            }}>
            <Icon
              name="book"
              size={17}
              color="#ff6666"
              style={{marginRight: 5}}
            />
            <Text>{Quantity} books</Text>
            <Icon
              name="tag"
              size={17}
              color="#ff6666"
              style={{marginHorizontal: 5}}
            />
            <Text>{Price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  book_item: {
    marginVertical: 20,
    width: 155,
    marginHorizontal: 8,
  },
  book_img: {
    width: 155,
    height: 210,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 17,
  },
  author: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 15,
    color: '#ababab',
  },
  star_icon: {
    paddingHorizontal: 2,
  },
});