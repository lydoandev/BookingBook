import React from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import CategoryItem from './../components/categoryItem';

export default class App extends React.Component {
  renderItem = ({ item }) => {
    return <CategoryItem name={item.name} subList={item.subCatetory} />;
  };

  render() {
    return (
      <Container style={{ backgroundColor: '#fff', paddingTop: 20 }}>
        <FlatList
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}

const categories = [
  {
    name: 'Kinh Tế',
    subCatetory: ['Kinh Tế 1', 'Kinh Tế 2', 'Kinh Tế 3'],
  },
  {
    name: 'Chính trị',
    subCatetory: ['Chính trị 1', 'Chính trị 2', 'Chính trị 3'],
  },
  {
    name: 'Văn hóa',
    subCatetory: ['Văn hóa 1', 'Văn hóa 2', 'Văn hóa 3'],
  },
  {
    name: 'Xã hội',
    subCatetory: ['Xã hội 1', 'Xã hội 2', 'Xã hội 3'],
  },
  {
    name: 'Khoa học',
    subCatetory: ['Khoa học 1', 'Khoa học 2', 'Khoa học 3'],
  },
  {
    name: 'Thể thao',
    subCatetory: ['Thể thao 1', 'Thể thao 2', 'Thể thao 3'],
  },
  {
    name: 'Tự nhiên',
    subCatetory: ['Tự nhiên 1', 'Tự nhiên 2', 'Tự nhiên 3'],
  },
  {
    name: 'Truyện tranh',
    subCatetory: ['Truyện tranh 1', 'Truyện tranh 2', 'Truyện tranh 3'],
  },
  {
    name: 'Tôn giáo',
    subCatetory: ['Tôn giáo 1', 'Tôn giáo 2', 'Tôn giáo 3'],
  },
  {
    name: 'Lịch sử',
    subCatetory: ['Lịch sử 1', 'Lịch sử 2', 'Lịch sử 3'],
  },
];
