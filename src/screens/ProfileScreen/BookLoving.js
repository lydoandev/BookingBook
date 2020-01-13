import React, { Component } from 'react'
import { FlatList } from 'react-native'
import ItemBook from '../../components/Home/ItemBook'

export default class BookLoving extends Component {
  render() {
    return (
      <FlatList
        data={this.props.booksProfile.Basket.Items}
        horizontal={false}
        renderItem={({ item }) => (
          <ItemBook
            item={item.Book}
            flex="row"
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    )
  }
}
