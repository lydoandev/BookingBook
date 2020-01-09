import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Star} from '../../components/Star';
import ListBook from '../../components/ListBook';
import {books} from '../../data/dataDemo';
import callAPI from '../../utils/callAPI';
import TitleSection from '../../components/TitleSection';
import navigateTo from '../../utils/navigateTo';
import {Navigation} from 'react-native-navigation';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      loading: true,
      relatedBooks: [],
    };
    this.getRelatedBook();
  }

  navigationButtonPressed = ({buttonId}) => {
    const {componentId} = this.props;
    if (buttonId === 'close') {
      Navigation.dismissModal(componentId);
    }
  };

  navigateToDetail = item => {
    navigateTo({item}, this.props.componentId, 'Detail', item.Title);
  };

  getRelatedBook = async () => {
    var data = await callAPI(
      `api/books/${this.props.item.Id}/relatedBooks`,
      'GET',
    );
    this.setState({
      loading: false,
      relatedBooks: data.data.Data.RelatedBooks,
    });
  };

  render() {
    var {
      Authors,
      Title,
      OverallStarRating,
      Price,
      Quantity,
      TotalReview,
      Content,
      Medias,
      Id,
    } = this.props.item;
    const {relatedBooks, loading} = this.state;
    console.log('Id: ', Id);

    if (loading) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#ff6666" style={{flex: 1}} />
        </View>
      );
    }
    return (
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.info}>
          <Image
            source={{uri: Medias[0].ImageAppUrl}}
            style={styles.book_img}
          />
          <Text style={styles.title} numberOfLines={1}>
            {Title}
          </Text>
          <Text style={styles.author}>{Authors[0].Name}</Text>
          <Star star={OverallStarRating} TotalReview={TotalReview} />
        </View>
        <View style={{marginVertical: 30}}>
          <Text style={styles.textContent} numberOfLines={6}>
            {Content}
          </Text>
        </View>
        <TitleSection type="Sách tương tự" />
        <ListBook
          data={relatedBooks}
          navigateToDetail={this.navigateToDetail}
        />
        <Text style={{fontSize: 20}}>Nhận xét</Text>
        <View
          style={{
            marginVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 5,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text>Viết nhận xét cho cuốn sách này</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 15,
  },
  book_img: {
    width: 165,
    height: 220,
    borderRadius: 6,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 18,
  },
  author: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    color: '#ababab',
  },
  textContent: {
    color: '#7f7f7f',
  },
});
