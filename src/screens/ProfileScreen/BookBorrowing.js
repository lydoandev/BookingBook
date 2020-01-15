import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import ItemBook from '../../components/Profile/ItemBook';

export default class BookBorrowing extends Component {
  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.props.bookBorrowing}
          numColumns={3}
          renderItem={({ item }) => (
            <ItemBook
              item={item.BookCopy.Book}
              type="borrow"
            />
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    )
  }
}
