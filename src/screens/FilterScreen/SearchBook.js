import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class SearchBook extends Component {
  onPressBack = () => {
    Navigation.dismissModal(this.props.componentId);
  };
  render() {
    return (
      <View>
        <TouchableOpacity style={{marginTop: 10}} onPress={this.onPressBack}>
          <Image source={require('./../../assets/images/closeCategory.png')} />
        </TouchableOpacity>
        <View />
        <View style={styles.viewInputSearch}>
          <TextInput style={styles.borderInput} />
          <TouchableOpacity onPress={this.onPressMoveSearchScreen}>
            <Image source={require('./../../assets/images/searchIcon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewInputSearch: {
    flexDirection: 'row',
  },
  borderInput: {
    borderEndColor: 'gray',
    borderBottomWidth: 0.5,
    width: '90%',
    height: 40,
  },
});
