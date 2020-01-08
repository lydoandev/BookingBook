import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ItemBook from './ItemBook'


export default class ListBook extends Component {


  render() {
    const { data, navigateToDetail } = this.props;
    return (
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({ item }) => <ItemBook item={item} flex='column' navigateToDetail={navigateToDetail}></ItemBook>}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    )
  }
}

const styles = StyleSheet.create({
  listBooks: {
    marginVertical: 15
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
})
