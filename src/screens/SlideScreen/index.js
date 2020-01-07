import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-web-swiper";
import SwiperSlider from "../../components/Slide/SwiperSlider";
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center'
  },
  slideContainer: {
    flex: 1,
  },
});

export default class Slide extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          controlsProps={{
            prevPos: false,
            nextPos: false,
            dotsWrapperStyle: {
              bottom: 190,
            },
          }}
        >
          <View style={styles.slideContainer}>
            <SwiperSlider sourceImage={slider1} title='Tìm sách yêu thích' description='Rất nhiều cuốn sách hay và chương trình thú vị được tích hợp trên hệ thống'></SwiperSlider>
          </View>
          <View style={styles.slideContainer}>
            <SwiperSlider sourceImage={slider2} title='Lưu vào giỏ và đặt sách' description='Sách sẽ được giữ trong 2 giờ đồng hồHãy chắc chắn là bạn đến nhận kịp giờ'></SwiperSlider>
          </View>
          <View style={styles.slideContainer}>
            <SwiperSlider sourceImage={slider3} title='Tận hưởng cuốn sách' description='Chọn một nơi yêu thích và tận hưởng cuốn sách mà mình yêu thích thôi nào.'></SwiperSlider>
          </View>
        </Swiper>
      </View>
    )
  }
}