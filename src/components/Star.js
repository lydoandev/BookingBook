import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Star = props => {
  const {star, TotalReview} = props;
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        name="star"
        size={13}
        style={styles.star_icon}
        color={star < 1 ? '#ababab' : '#ffd11a'}
      />
      <Icon
        name="star"
        size={13}
        style={styles.star_icon}
        color={star < 2 ? '#ababab' : '#ffd11a'}
      />
      <Icon
        name="star"
        size={13}
        style={styles.star_icon}
        color={star < 3 ? '#ababab' : '#ffd11a'}
      />
      <Icon
        name="star"
        size={13}
        style={styles.star_icon}
        color={star < 4 ? '#ababab' : '#ffd11a'}
      />
      <Icon
        name="star"
        size={13}
        style={styles.star_icon}
        color={star < 5 ? '#ababab' : '#ffd11a'}
      />
      <Text style={{marginLeft: 10}}>({TotalReview})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  star_icon: {
    paddingHorizontal: 2,
  },
});
