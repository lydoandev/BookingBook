import {Navigation} from 'react-native-navigation';

export default function navigateTo(props, compId, page, title) {
  Navigation.push(compId, {
    component: {
      name: page,
      passProps: {
        ...props,
      },
      options: {
        topBar: {
          title: {
            text: title,
            alignment: 'center',
          },
        },
      },
    },
  });
}
