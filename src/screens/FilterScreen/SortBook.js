import React, {Component} from 'react';
import {View, Text, ListItem, Body, Right, Container} from 'native-base';
import {TouchableOpacity, FlatList, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class SortBook extends Component {
  constructor() {
    super();
    this.state = {
      sort: [
        'Xem nhiều',
        'Đánh giá',
        'Giảm giá',
        'Từ thấp đến cao',
        'Từ cao đến thấp',
        ,
      ],
    };
  }

  onMoveFilterScreen = item => {
    Navigation.showModal({
      component: {
        name: 'FilterScreen',
        passProps: {
          sort: item,
        },
      },
    });
  };

  renderItem = ({item}) => {
    return (
      <View>
        <ListItem icon onPress={() => this.onMoveFilterScreen(item)}>
          <Body>
            <Text>{item}</Text>
          </Body>
        </ListItem>
      </View>
    );
  };

  render() {
    let {sort} = this.state;
    return (
      <Container style={{backgroundColor: '#fff', paddingTop: 20}}>
        <FlatList
          data={sort}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}
