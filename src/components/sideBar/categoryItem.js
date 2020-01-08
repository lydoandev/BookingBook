import React, {Component} from 'react';
import {FlatList, Image} from 'react-native';
import {View, Text, ListItem, Body, Right} from 'native-base';
import SubCategory from './SubCategory';

export default class categoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false, isTick: false};
  }

  renderItem = ({item}) => {
    return <SubCategory tick={item.Name} subList={item.Name} />;
  };

  render() {
    return (
      <View>
        <ListItem
          icon
          onPress={() =>
            this.setState({
              isShow: !this.state.isShow,
              isTick: !this.state.isTick,
            })
          }>
          <Body>
            <Text>{this.props.name}</Text>
          </Body>
          <Right>
            {this.props.subList.length !== 0 ? (
              <Image source={require('./../../assets/images/arrow.png')} />
            ) : this.state.isTick ? (
              <Image source={require('./../../assets/images/tickIcon.png')} />
            ) : null}
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
