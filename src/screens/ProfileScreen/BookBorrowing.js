import React, { Component } from 'react'
import { FlatList } from 'react-native'
import ItemBook from '../../components/Profile/ItemBook';

export default class BookBorrowing extends Component {
  render() {
    return (
      <FlatList
        data={this.props.booksProfile.Basket.Items}
        numColumns={3}
        renderItem={({ item }) => (
          <ItemBook
            item={item.Book}
            type="borrow"
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    )
  }
}
