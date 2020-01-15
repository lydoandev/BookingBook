import React, {Component} from 'react';
import {Text, View, styles} from 'react-native';
import {FlatList, ItemBook} from 'react-native-navigation';

class FilterBook {
  static hanldFilterBook = (key, flex, numColumns, sort, dataBook) => {
    return (
      <View style={styles.itemView}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.hanldSortBook(sort, dataBook)}
            numColumns={numColumns}
            key={key}
            renderItem={({item}) => (
              <ItemBook
                item={item}
                flex={flex}
                navigateToDetail={this.navigateToDetail}
              />
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  static hanldFilterBookChosseCategory = (
    key,
    flex,
    numColumns,
    sort,
    dataBook,
  ) => {
    return (
      <View style={styles.itemView}>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.hanldSortBook(sort, dataBook)}
            numColumns={numColumns}
            key={key}
            renderItem={({item}) =>
              item.Categories[0].Name === this.state.category ||
              item.Categories[1].Name === this.state.category ? (
                <ItemBook
                  item={item}
                  flex={flex}
                  navigateToDetail={this.navigateToDetail}
                />
              ) : (
                console.log('null')
              )
            }
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };
}
