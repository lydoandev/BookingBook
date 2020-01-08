import React, {Component} from 'react';
import {Image} from 'react-native';
import {View, Text, ListItem, Body, Right} from 'native-base';

export default class SubCategory extends Component {
  constructor() {
    super();
    this.state = {
      isTick: false,
    };
  }

  render() {
    console.log(this.props.tick);
    return (
      <View>
        <ListItem onPress={() => this.setState({isTick: !this.state.isTick})}>
          <Body>
            <Text>{this.props.subList}</Text>
          </Body>
          <Right>
            {this.state.isTick ? (
              <Image source={require('./../../assets/images/tickIcon.png')} />
            ) : null}
          </Right>
        </ListItem>
      </View>
    );
  }
}
