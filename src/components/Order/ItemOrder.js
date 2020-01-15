import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ItemOrder extends Component {

  convertDate = (inputDate) => {
    const yourDate = new Date(inputDate);
    let date = yourDate.getDate() + "/" + parseInt(yourDate.getMonth() + 1) + "/" + yourDate.getFullYear();
    return date
  }

  cutDate = (date) => {
    var day = date.substring(0, 10);
    return day.split("-").join("/")
  }

  openModalInfo = () => {
    this.props.openModalInfo(this.props.item)
  }

  render() {
    var {
      Title,
      Price,
      Quantity
    } = this.props.item.BookCopy.Book;
    const { DateReturned, CreatedAt, DisplayStatus, ImageUrl, Id, BorrowedDate } = this.props.item;
    let color = '#7f7f7f';
    var date = '';
    if (DisplayStatus === 'Đã đặt trước') {
      color = '#ff6666';
      date = 'Ngày yêu cầu: ' + this.convertDate(CreatedAt);
    } else if (DisplayStatus === 'Đang mượn') {
      color = '#73c700';
      date = 'Ngày mượn: ' + this.cutDate(BorrowedDate);
    } else if (DisplayStatus === 'Đã trả') {
      color = '#1d9dd8';
      date = 'Ngày trả: ' + this.cutDate(DateReturned);
    } else if (DisplayStatus === 'Đã hủy') {
      color = '#ff0000';
      date = 'Ngày yêu cầu: ' + this.convertDate(CreatedAt);
    }
    return (
      <TouchableOpacity style={{ borderBottomColor: '#7f7f7f', borderBottomWidth: 1, }} onPress={this.openModalInfo}>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: ImageUrl || '' }} style={styles.img}></Image>
            <View style={{ flexDirection: 'column', marginHorizontal: 5 }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name="book"
                  size={17}
                  color="#ff6666"
                  style={{ marginRight: 5 }}
                />
                <Text>{Quantity} quyển</Text>
                <Icon
                  name="money"
                  size={17}
                  color="#ff6666"
                  style={{ marginHorizontal: 5 }}
                />
                <Text>{String(Price).replace(/(.)(?=(\d{3})+$)/g, '$1,')}đ</Text>
              </View>
              <Text>Ngày mượn: {this.convertDate(CreatedAt)}</Text>
              <Text>Ngày trả: {DateReturned}</Text>
            </View>
          </View>
          <View></View>
        </TouchableOpacity> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 25 }}>
          <View>
            <Text style={{ fontSize: 18, color: '#4a4a4a', marginBottom: 5 }}>{String(Price).replace(/(.)(?=(\d{3})+$)/g, '$1,')}đ</Text>
            <Text style={{ color: '#7f7f7f', fontSize: 17 }}>{date}</Text>
          </View>
          <View >
            <Text style={{ fontSize: 18, textAlign: 'left', color: '#7f7f7f' }}>Mã: {Id.toUpperCase()}</Text>
            <Text style={{ textAlign: 'right', fontSize: 17, color: color }}>{DisplayStatus}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: 65,
    height: 80,

  }
})
