/**
 * @format
 */
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'

import { Navigation } from 'react-native-navigation';
import Detail from './src/screens/HomeScreen/Detail';
import Library from './src/screens/LibraryScreen'
import Notification from './src/screens/NotificationScreen'
import Order from './src/screens/OrderScreen'
import Profile from './src/screens/ProfileScreen'
import Slide from './src/screens/SlideScreen'
import Home from './src/screens/HomeScreen'
import { store, persistor } from './src/reduxs/store'
import { Provider } from "react-redux";

console.disableYellowBox = true
Navigation.registerComponent('Home', () => ReducerComponent(Home), () => Home);
Navigation.registerComponent('Detail', () => ReducerComponent(Detail), () => Detail);
Navigation.registerComponent('Library', () => ReducerComponent(Library), () => Library);
Navigation.registerComponent('Notification', () => ReducerComponent(Notification), () => Notification);
Navigation.registerComponent('Order', () => ReducerComponent(Order), () => Order);
Navigation.registerComponent('Profile', () => ReducerComponent(Profile), () => Profile);
Navigation.registerComponent('Slide', () => ReducerComponent(Slide), () => Slide);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Slide',
      },
    },
  });
});

function ReducerComponent(Component) {
  return (props) => (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider >
  )
}
