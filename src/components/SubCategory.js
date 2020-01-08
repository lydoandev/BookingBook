import React, {Component} from 'react';
import {View, Text, ListItem, Body} from 'native-base';

export default class SubCategory extends Component {
  render() {
    return (
      <View>
        <ListItem onPress={() => alert(this.props.subList)}>
          <Body>
            <Text>{this.props.subList}</Text>
          </Body>
        </ListItem>
      </View>
    );
  }
}
