/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
// import categoryScreen from './src/screens/categoryScreen';

// Navigation.registerComponent('categoryScreen', () => categoryScreen);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'categoryScreen',
//               options: {
//                 topBar: {
//                   title: {
//                     text: 'Thể loại',
//                     alignment: 'center',
//                   },
//                   leftButtons: {
//                     id: 'closeCategory',
//                     icon: require('./src/assets/closeCategory.png'),
//                   },
//                   rightButtons: {
//                     id: 'loadCategory',
//                     icon: require('./src/assets/crrowCycle.png'),
//                   },
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//   });
// });

import Filter from './src/screens/filter';

Navigation.registerComponent('Filter', () => Filter);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Filter',
              options: {
                topBar: {
                  leftButtons: {
                    id: 'slideBar',
                    icon: require('./src/assets/closeCategory.png'),
                  },
                  rightButtons: {
                    id: 'loadCategory',
                    icon: require('./src/assets/crrowCycle.png'),
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
