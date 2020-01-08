import React, {Component} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import ListBook from '../../components/ListBook';
import {Button} from 'native-base';
import {Navigation} from 'react-native-navigation';

export default class Home extends Component {
  navigationButtonPressed = ({buttonId}) => {
    const {componentId} = this.props;
    if (buttonId === 'sidebar') {
      Navigation.mergeOptions(componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          Medias: [
            {
              ImageUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_web.jpg',
              ImageAppUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_app.jpg',
              ImageThumbUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_thumb.jpg',
              Id: 'OXhjuoHo',
              FileName: '1544513472791_1544538675183.jpg',
            },
          ],
          TypeOfCover: 'Bìa Mềm',
          IsPastedQrCode: true,
          YearOfPublish: 2016,
          Shelf: {
            LibraryId: 'ppSKc0HJ',
            Id: 'MeuEs6f6',
            Capacity: 150,
            Name: 'ENG.CHILD.03',
            Position: '12 Cao Thắng',
            Description: null,
            IsDeleted: false,
            BookCount: 103,
          },
          Publishers: [
            {
              Name: 'Parragon Books',
            },
          ],
          Categories: [
            {
              Name: 'Truyện đọc thiếu nhi',
            },
            {
              Name: 'Sách Tiếng Anh',
            },
          ],
          Authors: [
            {
              Name: 'Disney',
            },
          ],
          ReleaseCompanies: [
            {
              Name: 'Đang cập nhật',
            },
          ],
          Title: 'Disney Storybook Collection - Frozen',
          UrlName: 'disney-storybook-collection-frozen-e-4-d',
          Content:
            "Disney Storybook Collection - Frozen\nThis wonderful storybook collection of stories is perfect for any Frozen fan! Join Elsa, Anna, Olaf and friends for some adventure, mystery and fairytale fun in these exciting stories. Inside you'll find six stories: A Frozen Adventure Childhood Times A New Reindeer Friend Babysitting the Troll Tots Across the Sea Olaf's Perfect Summer Day Perfect for reading to your little one, or as a first book for them to read themselves!",
          Url: '/books/disney-storybook-collection-frozen-e-4-d',
          OverallStarRating: 4,
          Quantity: 1,
          Availability: 1,
          TotalReview: 5,
          Price: 300000,
          FavoriteCount: 0,
          WaitingUsersCount: 0,
          IsTrending: false,
          CreatedAt: '12/11/2018 2:31:52 PM +07:00',
          IsDeleted: true,
          Id: 'GjInf6TW',
        },
        {
          Medias: [
            {
              ImageUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_web.jpg',
              ImageAppUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_app.jpg',
              ImageThumbUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_thumb.jpg',
              Id: 'OXhjuoHo',
              FileName: '1544513472791_1544538675183.jpg',
            },
          ],
          TypeOfCover: 'Bìa Mềm',
          IsPastedQrCode: true,
          YearOfPublish: 2016,
          Shelf: {
            LibraryId: 'ppSKc0HJ',
            Id: 'MeuEs6f6',
            Capacity: 150,
            Name: 'ENG.CHILD.03',
            Position: '12 Cao Thắng',
            Description: null,
            IsDeleted: false,
            BookCount: 103,
          },
          Publishers: [
            {
              Name: 'Parragon Books',
            },
          ],
          Categories: [
            {
              Name: 'Truyện đọc thiếu nhi',
            },
            {
              Name: 'Sách Tiếng Anh',
            },
          ],
          Authors: [
            {
              Name: 'Disney',
            },
          ],
          ReleaseCompanies: [
            {
              Name: 'Đang cập nhật',
            },
          ],
          Title: 'Disney Storybook Collection - Frozen',
          UrlName: 'disney-storybook-collection-frozen-e-4-d',
          Content:
            "Disney Storybook Collection - Frozen\nThis wonderful storybook collection of stories is perfect for any Frozen fan! Join Elsa, Anna, Olaf and friends for some adventure, mystery and fairytale fun in these exciting stories. Inside you'll find six stories: A Frozen Adventure Childhood Times A New Reindeer Friend Babysitting the Troll Tots Across the Sea Olaf's Perfect Summer Day Perfect for reading to your little one, or as a first book for them to read themselves!",
          Url: '/books/disney-storybook-collection-frozen-e-4-d',
          OverallStarRating: 5,
          Quantity: 1,
          Availability: 1,
          TotalReview: 2,
          Price: 300000,
          FavoriteCount: 0,
          WaitingUsersCount: 0,
          IsTrending: false,
          CreatedAt: '12/11/2018 2:31:52 PM +07:00',
          IsDeleted: true,
          Id: 'GjInf6TW',
        },
        {
          Medias: [
            {
              ImageUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_web.jpg',
              ImageAppUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_app.jpg',
              ImageThumbUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_thumb.jpg',
              Id: 'OXhjuoHo',
              FileName: '1544513472791_1544538675183.jpg',
            },
          ],
          TypeOfCover: 'Bìa Mềm',
          IsPastedQrCode: true,
          YearOfPublish: 2016,
          Shelf: {
            LibraryId: 'ppSKc0HJ',
            Id: 'MeuEs6f6',
            Capacity: 150,
            Name: 'ENG.CHILD.03',
            Position: '12 Cao Thắng',
            Description: null,
            IsDeleted: false,
            BookCount: 103,
          },
          Publishers: [
            {
              Name: 'Parragon Books',
            },
          ],
          Categories: [
            {
              Name: 'Truyện đọc thiếu nhi',
            },
            {
              Name: 'Sách Tiếng Anh',
            },
          ],
          Authors: [
            {
              Name: 'Disney',
            },
          ],
          ReleaseCompanies: [
            {
              Name: 'Đang cập nhật',
            },
          ],
          Title: 'Disney Storybook Collection - Frozen',
          UrlName: 'disney-storybook-collection-frozen-e-4-d',
          Content:
            "This wonderful storybook collection of stories is perfect for any Frozen fan! Join Elsa, Anna, Olaf and friends for some adventure, mystery and fairytale fun in these exciting stories. Inside you'll find six stories: A Frozen Adventure Childhood Times A New Reindeer Friend Babysitting the Troll Tots Across the Sea Olaf's Perfect Summer Day Perfect for reading to your little one, or as a first book for them to read themselves!",
          Url: '/books/disney-storybook-collection-frozen-e-4-d',
          OverallStarRating: 3,
          Quantity: 1,
          Availability: 1,
          TotalReview: 10,
          Price: 300000,
          FavoriteCount: 0,
          WaitingUsersCount: 0,
          IsTrending: false,
          CreatedAt: '12/11/2018 2:31:52 PM +07:00',
          IsDeleted: true,
          Id: 'GjInf6TW',
        },
        {
          Medias: [
            {
              ImageUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_web.jpg',
              ImageAppUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_app.jpg',
              ImageThumbUrl:
                'https://the-books-dev-files.s3.amazonaws.com/Image/1544513472791_1544538675183_thumb.jpg',
              Id: 'OXhjuoHo',
              FileName: '1544513472791_1544538675183.jpg',
            },
          ],
          TypeOfCover: 'Bìa Mềm',
          IsPastedQrCode: true,
          YearOfPublish: 2016,
          Shelf: {
            LibraryId: 'ppSKc0HJ',
            Id: 'MeuEs6f6',
            Capacity: 150,
            Name: 'ENG.CHILD.03',
            Position: '12 Cao Thắng',
            Description: null,
            IsDeleted: false,
            BookCount: 103,
          },
          Publishers: [
            {
              Name: 'Parragon Books',
            },
          ],
          Categories: [
            {
              Name: 'Truyện đọc thiếu nhi',
            },
            {
              Name: 'Sách Tiếng Anh',
            },
          ],
          Authors: [
            {
              Name: 'Disney',
            },
          ],
          ReleaseCompanies: [
            {
              Name: 'Đang cập nhật',
            },
          ],
          Title: 'Disney Storybook Collection - Frozen',
          UrlName: 'disney-storybook-collection-frozen-e-4-d',
          Content:
            "Disney Storybook Collection - Frozen\nThis wonderful storybook collection of stories is perfect for any Frozen fan! Join Elsa, Anna, Olaf and friends for some adventure, mystery and fairytale fun in these exciting stories. Inside you'll find six stories: A Frozen Adventure Childhood Times A New Reindeer Friend Babysitting the Troll Tots Across the Sea Olaf's Perfect Summer Day Perfect for reading to your little one, or as a first book for them to read themselves!",
          Url: '/books/disney-storybook-collection-frozen-e-4-d',
          OverallStarRating: 5,
          Quantity: 1,
          Availability: 1,
          TotalReview: 4,
          Price: 300000,
          FavoriteCount: 0,
          WaitingUsersCount: 0,
          IsTrending: false,
          CreatedAt: '12/11/2018 2:31:52 PM +07:00',
          IsDeleted: true,
          Id: 'GjInf6TW',
        },
      ],
    };
  }

  render() {
    const {books} = this.state;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, margin: 15}}>
        <ListBook title="Đọc Nhiều" data={books} />
        <ListBook title="Mua Nhiều" data={books} />
      </ScrollView>
    );
  }
}
