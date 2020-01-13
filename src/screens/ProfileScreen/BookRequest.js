import React, { Component } from 'react'
import { FlatList } from 'react-native'
import ItemRequestBook from '../../components/Profile/ItemRequestBook'


export default class BookRequest extends Component {
  render() {
    return (
      <FlatList
        data={this.props.booksProfile.Basket.Items}
        horizontal={false}
        renderItem={({ item }) => (
          <ItemRequestBook
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
