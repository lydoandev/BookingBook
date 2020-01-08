import React, {Component} from 'react';
import {FlatList, Image} from 'react-native';
import {View, Text, ListItem, Body, Right} from 'native-base';
import SubCategory from './SubCategory';

export default class categoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
  }

  renderItem = ({item}) => {
    return <SubCategory subList={item} />;
  };

  render() {
    return (
      <View>
        <ListItem
          icon
          onPress={() => this.setState({isShow: !this.state.isShow})}>
          <Body>
            <Text>{this.props.name}</Text>
          </Body>
          <Right>
            <Image source={require('./../assets/arrow.png')} />
          </Right>
        </ListItem>
        {this.state.isShow ? (
          <FlatList
            data={this.props.subList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
          />
        ) : null}
      </View>
    );
  }
}
