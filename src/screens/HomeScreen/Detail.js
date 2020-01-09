import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Star } from '../../components/Home/Star';
import ListBook from '../../components/Home/ListBook';
import { books } from '../../data/dataDemo';
import callAPI from '../../utils/callAPI';
import TitleSection from '../../components/Home/TitleSection';
import navigateTo from '../../utils/navigateTo';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import CategoryForDetail from '../../components/Home/CategoryForDetail';
import Comment from '../../components/Home/Comment';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      loading: true,
      relatedBooks: [],
      reviews: [],
      seeAll: false
    };
    this.getRelatedBook();
    this.getReviews();
  }

  navigationButtonPressed = ({ buttonId }) => {
    const { componentId } = this.props;
    if (buttonId === 'close') {
      Navigation.dismissModal(componentId);
    }
  };

  navigateToDetail = item => {
    navigateTo({ item }, this.props.componentId, 'Detail', item.Title);
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

  getReviews = async () => {
    var data = await callAPI(
      `api/reviews?BookId=${this.props.item.Id}`,
      'GET',
    );
    console.log("data: ", data)
    this.setState((prevState) => ({
      ...prevState,
      loading: false,
      reviews: data.data.Reviews,
    }));
  };

  navigateToSeeAll = () => {
    const { relatedBooks } = this.state;
    navigateTo({ data: relatedBooks }, this.props.componentId, 'SeeAll', 'Sách tương tự');
  };

  seeAllContent = () => {
    this.setState((prevState) => ({
      ...prevState,
      seeAll: !prevState.seeAll
    }))
  }

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
      Categories,
    } = this.props.item;
    const { relatedBooks, loading, seeAll, reviews } = this.state;
    var categories = Categories.map((item, key) => (
      <CategoryForDetail key={key} cate={item}></CategoryForDetail>)
    )
    let text = '';
    if (seeAll) {
      text = 'thu gọn'
    } else {
      text = 'xem hết'
    }

    let reviewList;

    if (reviews.length > 0) {
      reviewList = <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Comment
            item={item}
          />
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    } else {
      reviewList = <View style={styles.info}>
        <Text style={{ color: '#7f7f7f' }}>Không có nhận xét nào</Text>
      </View>
    }

    if (loading) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size="large" color="#ff6666" style={{ flex: 1 }} />
        </View>
      );
    }
    console.log("Id: ", Id);

    return (
      <View>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.info}>
            <Image
              source={{ uri: Medias[0].ImageAppUrl }}
              style={styles.book_img}
            />
            <Text style={styles.title} numberOfLines={1}>
              {Title}
            </Text>
            <Text style={styles.author}>{Authors[0].Name}</Text>
            <Star star={OverallStarRating} TotalReview={TotalReview} />
            <View style={{ flexDirection: 'row' }}>{categories}</View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.textContent} numberOfLines={seeAll && 100 || 5}>
              {Content}
            </Text>
            <Text onPress={this.seeAllContent} style={{ color: '#ff6666' }}>{text}</Text>
          </View>
          <TitleSection type="Sách tương tự" navigateToSeeAll={this.navigateToSeeAll} data={relatedBooks} />
          <ListBook
            data={relatedBooks}
            navigateToDetail={this.navigateToDetail}
          />
          <Text style={{ fontSize: 20 }}>Nhận xét</Text>
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
                borderColor: '#ff6666',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 40,
              }}>
              <Text style={{ color: '#ff6666' }}>Viết nhận xét cho cuốn sách này</Text>
            </TouchableOpacity>
          </View>
          {reviewList}
        </ScrollView>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
          <TouchableOpacity style={styles.btnAddToCart} onPress={this.addToCart}>
            <Text style={styles.btnText}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  btnAddToCart: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666"
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20
  }
});
