export const bottomTabs = {
  children: [{
    stack: {
      children: [{
        component: {
          name: 'Home',
          passProps: {
            text: 'This is tab 1'
          }
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'HOME',
            alignment: 'center'
          }
        },
        bottomTab: {
          titleDisplayMode: 'showWhenActive',
          text: 'Home',
          icon: require('../assets/images/home.png'),
          testID: 'FIRST_TAB_BAR_BUTTON'
        }
      }
    }
  },
  {
    component: {
      name: 'Order',
      passProps: {
        text: 'This is tab 2'
      },
      options: {
        topBar: {
          title: {
            text: 'Order'
          }
        },
        bottomTab: {
          titleDisplayMode: 'showWhenActive',
          text: 'ToDoList',
          icon: require('../assets/images/order.png'),
          testID: 'SECOND_TAB_BAR_BUTTON'
        }
      }
    }
  },
  {
    component: {
      name: 'Profile',
      passProps: {
        text: 'This is tab 2'
      },
      options: {
        bottomTab: {
          titleDisplayMode: 'showWhenActive',
          text: 'Profile',
          icon: require('../assets/images/profile.png'),
          testID: 'SECOND_TAB_BAR_BUTTON'
        },
        topBar: {
          title: {
            text: 'Profile'
          }
        }
      }
    }
  },
  {
    component: {
      name: 'Notification',
      passProps: {
        text: 'This is tab 2'
      },
      options: {
        bottomTab: {
          titleDisplayMode: 'showWhenActive',
          text: 'Notification',
          icon: require('../assets/images/notification.png'),
          testID: 'SECOND_TAB_BAR_BUTTON'
        },
        topBar: {
          title: {
            text: 'Profile'
          }
        }
      }
    }
  },
  {
    component: {
      name: 'Library',
      passProps: {
        text: 'This is tab 2'
      },
      options: {
        bottomTab: {
          titleDisplayMode: 'showWhenActive',
          text: 'Library',
          icon: require('../assets/images/library.png'),
          testID: 'SECOND_TAB_BAR_BUTTON'
        },
        topBar: {
          title: {
            text: 'Profile'
          }
        }
      }
    }
  }
  ]
}