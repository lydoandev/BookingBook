import React, {Component} from 'react';
import {FlatList} from 'react-native';
import ItemBook from '../../components/ItemBook';
import navigateTo from '../../utils/navigateTo';
import {Navigation} from 'react-native-navigation';

export default class SeeAll extends Component {
  navigateToDetail = item => {
    navigateTo({item}, this.props.componentId, 'Detail', item.Title);
  };
  render() {
    const {data} = this.props;
    return (
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <ItemBook
            item={item}
            flex="column"
            navigateToDetail={this.navigateToDetail}
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}
