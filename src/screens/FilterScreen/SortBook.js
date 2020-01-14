import React, {Component} from 'react';
import {View, Text, ListItem, Body, Right, Container} from 'native-base';
import {TouchableOpacity, FlatList, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class SortBook extends Component {
  constructor() {
    super();
    this.state = {
      sort: [
        'Từ thấp đến cao',
        'Từ cao đến thấp',
        'Từ A đến Z',
        'Từ Z đến A',
        ,
      ],
      dataSource: '',
    };
  }

  componentDidMount() {
    return fetch(
      'https://the-books-api-staging.enouvo.com/api/books?releaseCompanyIDs=0LCmtXFx&sortby=price&sortdesc=false',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.Books,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });

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
  }

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
    console.log('ághjgsa', this.state.dataSource);
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
