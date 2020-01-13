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
import CategoryForDetail from '../../components/Home/CategoryForDetail';
import Comment from '../../components/Home/Comment';
import ModalAddCart from '../../components/Home/ModalAddCart';
import { connect } from 'react-redux';

import * as bookActions from '../../reduxs/bookRedux/actions';
import * as userActions from '../../reduxs/authRedux/actions'
import CommentForm from '../../components/Home/CommentForm';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      relatedBooks: [],
      reviews: [],
      seeAll: false,
      modalVisible: false,
      addedToCart: false,
      errorAddToCart: '',
      commentVisible: false,
      errorComment: '',
      commented: false,
      showAllReview: false,
      showUpdateComment: false,
      alreadyComment: false,
      commentExist: {},
      idUser: props.idUser
    };
    this.getRelatedBook();
    this.getReviews();
    this.checkExistComment();
  }

  componentWillReceiveProps(nextProps, prevProps) {
    console.log("Nextx props", nextProps);
    const { idUser } = prevProps;
    console.log("Id user: ", idUser);

    if (this.props.idUser != nextProps.idUser) {
      this.checkExistComment();
    }
  }

  static getDerivedStateFromProps(props, state) {

    console.log('getDerivedStateFromProps: ', props.idUser);
    console.log(Detail.check(props, state));

    if (props.idUser !== state.idUser && Detail.check(props, state)) {

      console.log("Exist");

      return {
        ...state,
        alreadyComment: true,
        commentExist: {}
      };
    }

    return state;
  }

  static check = (props, state) => {
    const { reviews } = state;
    const { idUser } = props;
    console.log("Checked");

    reviews.forEach(comment => {
      console.log("Now: " + idUser + 'nex, ' + comment.UserId);

      if (idUser == comment.UserId) {
        console.log("Exisst");

        return true
      }
    })
    return false
  }

  navigateToDetail = item => {
    navigateTo({ item }, this.props.componentId, 'Detail', item.Title);
  };

  getRelatedBook = async () => {
    var data = await callAPI(
      `api/books/${this.props.item.Id}/relatedBooks`,
      'GET',
    );
    var relatedBooks = [];
    data.data.Data.RelatedBooks.forEach(item => {
      if (!item.IsDeleted) {
        relatedBooks.push(item)
      }
    })
    this.setState({
      loading: false,
      relatedBooks,
    });
  };

  getReviews = async () => {
    var data = await callAPI(
      `api/reviews?BookId=${this.props.item.Id}`,
      'GET',
    );
    this.setState((prevState) => ({
      ...prevState,
      loading: false,
      reviews: data.data.Reviews,
    }));
  };

  showLogin = () => {
    this.setState(prevState => ({
      ...prevState,
      addedToCart: false,
      modalVisible: false
    }))
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'Auth',
            options: {
              topBar: {
                title: {
                  text: 'Modal'
                }
              }
            }
          }
        }]
      }
    });
  }

  navigateToCart = () => {
    this.setState(prevState => ({
      ...prevState,
      addedToCart: false,
      modalVisible: false
    }))
    navigateTo({}, this.props.componentId, "Cart");
  }

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

  addToCart = async () => {
    const { isAuthenticated, idUser, token } = this.props;
    const info = { BookId: this.props.item.Id, Quantity: 1, UserId: idUser };
    if (isAuthenticated) {
      try {
        var data = await callAPI('api/basket', 'POST', info, token);
        this.props.getCart({ basketId: data.data.Data.Id, userId: idUser, token });
        this.setState(prevState => ({
          ...prevState,
          addedToCart: true
        }))

      } catch (error) {
        this.setState(prevState => ({
          ...prevState,
          errorAddToCart: error.response.data.Message
        }))
      }
    } else {
      this.setModalVisible();
    }
  }

  setModalVisible = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  closeError = () => {
    this.setState(prevState => ({
      ...prevState,
      errorAddToCart: ''
    }))
  }

  completedAddToCart = () => {
    this.setState(prevState => ({
      ...prevState,
      addedToCart: false
    }))
  }

  displayCommentForm = () => {
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      this.setState(prevState => ({
        ...prevState,
        commentVisible: !prevState.commentVisible
      }))
    } else {
      this.setModalVisible();
    }

  }

  showAllReview = () => {
    this.setState(prevState => ({
      ...prevState,
      showAllReview: !prevState.showAllReview
    }))
  }

  addComment = async (Content, StarRating) => {

    const { idUser, token } = this.props;
    const info = {
      BookId: this.props.item.Id, UserId: idUser, Content, StarRating, IsDeleted: false,
      IsOutstanding: false
    }
    try {
      var data = await callAPI('api/reviews', 'POST', info, token);
      this.getReviews();
      this.displayCommentForm();
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        errorComment: error.response.data.Message
      }))

    }
  }

  showUpdateComment = () => {
    this.setState((prevState) => ({
      ...prevState,
      commentVisible: true
    }));
  }

  checkExistComment = () => {
    const { reviews } = this.state;
    const { idUser } = this.props;
    console.log("Checked");

    reviews.forEach(comment => {
      if (idUser === comment.UserId) {
        console.log("Exist");

        this.setState((prevState) => ({
          ...prevState,
          alreadyComment: true,
          commentExist: comment
        }));
      }
    })
  }

  render() {
    console.log("Satet: ", this.state);

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
    const { relatedBooks, loading, seeAll, reviews, modalVisible, addedToCart, errorAddToCart, commentVisible, showAllReview, commentExist, alreadyComment } = this.state;
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
    console.log("Review: ", reviews);

    const { idUser } = this.props;

    if (reviews.length > 0) {
      reviewList = <FlatList
        data={showAllReview ? reviews : reviews.slice(0, 2)}
        renderItem={({ item }) => (
          <Comment
            item={item}
            idUser={idUser}
            showUpdateComment={this.showUpdateComment}
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
            flex='column'
          />
          <Text style={{ fontSize: 20 }}>Nhận xét</Text>
          <View
            style={{
              marginVertical: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.btnComment}
              onPress={this.displayCommentForm}
            >
              <Text style={{ color: '#ff6666', fontSize: 15 }}>Viết nhận xét cho cuốn sách này</Text>
            </TouchableOpacity>
          </View>
          {reviewList}
          {reviews.length > 2 &&
            <View
              style={{
                marginVertical: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.btnComment}
                onPress={this.showAllReview}
              >
                <Text style={{ color: '#ff6666', fontSize: 15 }}>{!showAllReview ? 'Hiển thị tất cả bình luận' : 'Hiển thị ít bình luận hơn'}</Text>
              </TouchableOpacity>
            </View>}
          <ModalAddCart
            modalVisible={modalVisible}
            setModalVisible={this.setModalVisible}
            text='Bạn cần đăng nhập để thực hiện chức năng này'
            textButton='Đăng nhập'
            navigateToCall={this.showLogin}
          >

          </ModalAddCart>
          <ModalAddCart
            modalVisible={addedToCart}
            setModalVisible={this.completedAddToCart}
            text='Thêm vào giỏ hàng thành công'
            textButton='Đến giỏ hàng'
            navigateToCall={this.navigateToCart}
          >
          </ModalAddCart>
          <ModalAddCart
            modalVisible={errorAddToCart != '' ? true : false}
            setModalVisible={this.closeError}
            text={errorAddToCart}
            textButton2='Đã hiểu'
          >
          </ModalAddCart>
          <CommentForm
            modalVisible={commentVisible}
            setModalVisible={this.displayCommentForm}
            addComment={this.addComment}
            isUpdate={alreadyComment}
            updateComment={this.updateComment}
            commentExist={commentExist}
          ></CommentForm>
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
    marginBottom: 60,
    marginHorizontal: 15,
    marginTop: 20,
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
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6666"
  },
  btnComment: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ff6666',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    width: '90%'
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20
  }
});

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    idUser: state.authReducer.user.Id,
    token: state.authReducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCart: ({ basketId, userId, token }) => dispatch(userActions.getCart({ basketId, userId, token })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
