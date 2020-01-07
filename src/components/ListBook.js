import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ItemBook from './ItemBook'

export default class ListBook extends Component {

  navigateToSeeAll = () => {
    // Navigation.showModal({
    //   stack: {
    //     children: [{
    //       component: {
    //         name: 'Detail',
    //         passProps: {
    //           item
    //         },
    //         options: {
    //           topBar: {
    //             // visible: false,
    //             // drawBehind: true,
    //             title: {
    //               text: item.title,
    //               alignment: 'center'
    //             },
    //             backButton: {
    //               id: 'close',
    //               size: 5,
    //               icon: require("../images/close.jpg"),
    //               visible: true
    //             }
    //           }
    //         }
    //       }
    //     }]
    //   }
    // });
  }

  render() {
    var { title, data } = this.props;
    console.log("Datta: ", data)
    return (
      <View>
        <View style={styles.titleContent}>
          <Text style={styles.title}>{title} ({data.length})</Text>
          <TouchableOpacity onPress={this.navigateToSeeAll}><Text style={{ color: '#ff6666' }} > Xem hết</Text></TouchableOpacity>
        </View>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({ item }) => <ItemBook item={item} flex='column'></ItemBook>}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listBooks: {
    marginVertical: 15
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
})
