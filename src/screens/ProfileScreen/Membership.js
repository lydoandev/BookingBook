import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList } from 'react-native'
import { Container } from 'native-base';
import ItemMembership from '../../components/Profile/ItemMembership';

export default class Membership extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View >
            <Image style={styles.styleQRCode} source={require('../../assets/images/platinumGreen.jpg')}></Image>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 15 }}>
            <View>
              <Text style={{ color: '#000000', fontSize: 17, fontFamily: 'SVN-ProximaNova', textAlign: 'center' }}>
                Gói thành viên
                  <Text style={styles.styleMemberShipName}> {(this.props.user.Membership.Name).toUpperCase()} </Text>
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: '#dadada', fontSize: 17, fontFamily: 'SVN-ProximaNova', textAlign: 'center' }}>Hết hạn:<Text style={{ color: '#000000' }}>{this.props.user.MembershipExpiryDate}</Text></Text>
            </View>
          </View>
          <TouchableOpacity >
            <Image style={styles.styleSetting} source={this.props.user.Image == null ? require('../../assets/images/arrow.png') : this.props.user.Image}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <ItemMembership title='Gia trị gói' value={this.props.user.Membership.Value}></ItemMembership>
          <ItemMembership title='Gia hạn sách' value={`${this.props.user.Membership.MaxExtensionTimes} lượt/năm`}></ItemMembership>
          <ItemMembership title='Yêu cầu sách' value={`${this.props.user.Membership.MaxRequestTimes} lượt/năm`}></ItemMembership>
          <ItemMembership title='Giao sách tại nhà' value={`${this.props.user.Membership.MaxDeliveryTimes} lượt/năm`}></ItemMembership>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 150
  },
  styleMemberShipName: {
    color: '#89c838',
    fontWeight: 'bold',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
  },
  styleQRCode: {
    borderRadius: 80,
    height: 50,
    width: 50,
  },
  styleSetting: {
    height: 40,
    width: 40,
  },
})
