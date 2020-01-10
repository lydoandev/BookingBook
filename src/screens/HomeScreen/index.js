import React, { Component } from 'react';
import {
  View,
  ScrollView,
  SectionList,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ListBook from '../../components/Home/ListBook';
import { offlineData } from '../../data/offlineData';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import * as bookActions from '../../reduxs/bookRedux/actions';
import TitleSection from '../../components/Home/TitleSection';
import navigateTo from '../../utils/navigateTo';
class Home extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCmsHome();
  }

  filterData = booksHome => {
    var books = [];
    var title = '';
    Object.keys(booksHome).forEach(function (key) {
      if (Array.isArray(offlineData[key])) {
        if (key == 'NewBooks') {
          title = 'Sách mới nhất';
        }
        if (key == 'HotTrendBooks') {
          title = 'Sách nổi bật nhất';
        }
        if (key == 'MostBorrowBooks') {
          title = 'Sách mượn nhiều nhất';
        }
        if (offlineData[key].length > 0) {
          books.push({
            type: title,
            data: [{ bookList: offlineData[key] }],
          });
        }
      }
    });
    return books;
  };

  navigateToDetailCall = item => {
    navigateTo({
      item
    }, this.props.componentId, 'Detail', {
      rightButtons: {
        id: 'favorite',
        icon: require('../../assets/images/heart.png'),
      },
    });
  };

  setCart = (cart) => {
    this.props.setCart(cart);
  }

  navigateToSeeAll = (data, type) => {
    navigateTo({ data }, this.props.componentId, 'SeeAll', {
      title: {
        text: type,
        alignment: 'center'
      }
    });
  };

  render() {
    const { loading, booksHome } = this.props.data;
    if (loading) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size="large" color="#ff6666" style={{ flex: 1 }} />
        </View>
      );
    } else {
      const books = this.filterData(booksHome) || [];
      return (
        <View style={{ flex: 1, margin: 15 }}>
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={books}
            keyExtractor={(item, index) => item + index}
            renderItem={item => (
              <ListBook
                data={item.section.data[0].bookList}
                navigateToDetail={this.navigateToDetailCall}
                flex='column'
              />
            )}
            // renderItem={({ item }) => console.log(item)}
            renderSectionHeader={({ section: { type, data } }) => (
              <TitleSection
                type={type}
                data={data[0].bookList}
                navigateToSeeAll={this.navigateToSeeAll}
              />
            )}
          />
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.bookReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCmsHome: () => dispatch(bookActions.fetchCmsHome()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
