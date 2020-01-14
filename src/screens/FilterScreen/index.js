import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import * as bookActions from '../../reduxs/bookRedux/actions';
import ItemBook from '../../components/ItemBook';
import navigateTo from '../../utils/navigateTo';
import {Form} from 'native-base';
import {sideMenu} from './../../config/bottomTabs';

class FilterScreen extends Component {
  constructor() {
    super();
    this.state = {
      category: null,
      isShow: false,
      listIcon: false,
    };
  }

  componentDidMount = async () => {
    this.props.fetchBook();
    let category = await AsyncStorage.getItem('FindCategory');
    this.setState({
      category: category,
      numColumns: 2,
    });
  };

  navigateToDetail = item => {
    navigateTo({item}, this.props.componentId, 'Detail', item.Title);
  };

  onPressBack = () => {
    Navigation.showModal({
      sideMenu,
    });
  };

  onPressMoveTypeScreen = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              id: 'SideBar',
              name: 'SideBar',
              options: {
                topBar: {
                  title: {
                    text: 'Thể loại',
                    alignment: 'center',
                  },
                  rightButtons: {
                    icon: require('./../../assets/images/crrowCycle.png'),
                  },
                  leftButtons: {
                    id: 'SideBar',
                    component: {
                      name: 'FilterScreen',
                    },
                    icon: require('./../../assets/images/arrowBig.png'),
                  },
                },
              },
            },
          },
        ],
      },
    });
  };

  onMoveSortScreen = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              id: 'SideBar',
              name: 'SortBook',
              options: {
                topBar: {
                  title: {
                    text: 'Sắp xếp',
                    alignment: 'center',
                  },
                  rightButtons: {
                    icon: require('./../../assets/images/crrowCycle.png'),
                  },
                  leftButtons: {
                    id: 'SideBar',
                    component: {
                      name: 'FilterScreen',
                    },
                    icon: require('./../../assets/images/arrowBig.png'),
                  },
                },
              },
            },
          },
        ],
      },
    });
  };

  render() {
    const {dataBook} = this.props;
    let {sort} = this.props;
    return (
      <View>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.onPressBack}>
              <Image source={require('./../../assets/images/backIcon.png')} />
            </TouchableOpacity>
            <Text>{this.state.category}</Text>
            <Image source={require('./../../assets/images/searchIcon.png')} />
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressMoveTypeScreen}>
              <View style={styles.button}>
                <Text>Thể Loại</Text>
                <Image
                  style={styles.filterIcon}
                  source={require('./../../assets/images/filterIcon.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sortIcon}
              onPress={this.onMoveSortScreen}>
              <View style={styles.button}>
                <Text style={{marginLeft: 10}}>Sắp xếp</Text>
                <Image
                  style={{marginLeft: 60}}
                  source={require('./../../assets/images/sortIcon.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isShow: !this.state.isShow,
                  listIcon: !this.state.listIcon,
                })
              }>
              {this.state.listIcon === false ? (
                <View style={styles.button}>
                  <Image
                    source={require('./../../assets/images/listIcon.png')}
                  />
                </View>
              ) : (
                <View style={styles.button}>
                  <Image
                    source={require('./../../assets/images/listIconSq.png')}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
          {this.state.isShow === false ? (
            <View style={styles.itemView}>
              <View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataBook}
                  numColumns={2}
                  renderItem={({item}) =>
                    item.Categories[0].Name === this.state.category ||
                    item.Categories[1].Name === this.state.category ? (
                      <ItemBook
                        item={item}
                        flex={'column'}
                        navigateToDetail={this.navigateToDetail}
                      />
                    ) : (
                      console.log('null')
                    )
                  }
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          ) : (
            <View>
              <View>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataBook}
                  numColumns={1}
                  key={this.state.numColumns}
                  renderItem={({item}) =>
                    item.Categories[0].Name === this.state.category ||
                    item.Categories[1].Name === this.state.category ? (
                      <ItemBook
                        item={item}
                        flex={'row'}
                        navigateToDetail={this.navigateToDetail}
                      />
                    ) : (
                      console.log('null')
                    )
                  }
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    dataBook: state.bookReducer.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBook: () => dispatch(bookActions.fetchBooks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    height: 40,
  },
  filterIcon: {
    marginLeft: 50,
    marginRight: -50,
  },
  sortIcon: {
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  itemView: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 250,
    marginTop: -10,
  },
});
