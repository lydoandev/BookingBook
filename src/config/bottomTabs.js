export const sideMenu = {
  left: {
    component: {
      name: 'SideBar',
      options: {
        topBar: {
          title: {
            text: 'Thể loại',
            alignment: 'center',
          },
        },
      },
    },
    visible: true,
  },
  center: {
    stack: {
      children: [
        {
          bottomTabs: {
            children: [
              {
                component: {
                  name: 'Home',
                  options: {
                    topBar: {
                      leftButtons: {
                        id: 'sidebar',
                        component: {
                          name: 'SideBar',
                        },
                        icon: require('./../assets/images/homeIcon.png'),
                      },
                    },
                    bottomTab: {
                      titleDisplayMode: 'showWhenActive',
                      text: 'Home',
                      icon: require('../assets/images/home.png'),
                      testID: 'FIRST_TAB_BAR_BUTTON',
                    },
                  },
                  passProps: {
                    text: 'This is tab 1',
                  },
                },
              },
              {
                component: {
                  name: 'Order',
                  passProps: {
                    text: 'This is tab 2',
                  },
                  options: {
                    topBar: {
                      visible: true,
                      title: {
                        text: 'Danh sách đơn hàng',
                        alignment: 'center'
                      },
                    },
                    bottomTab: {
                      titleDisplayMode: 'showWhenActive',
                      text: 'Order',
                      icon: require('../assets/images/order.png'),
                      testID: 'SECOND_TAB_BAR_BUTTON',
                    },
                  },
                },
              },
              {
                component: {
                  name: 'Profile',
                  passProps: {
                    text: 'This is tab 2',
                  },
                  options: {
                    bottomTab: {
                      titleDisplayMode: 'showWhenActive',
                      text: 'Profile',
                      icon: require('../assets/images/profile.png'),
                      testID: 'SECOND_TAB_BAR_BUTTON',
                    }
                  },
                },
              },
              {
                component: {
                  name: 'Notification',
                  passProps: {
                    text: 'This is tab 2',
                  },
                  options: {
                    bottomTab: {
                      titleDisplayMode: 'showWhenActive',
                      text: 'Thông báo',
                      icon: require('../assets/images/notification.png'),
                      testID: 'SECOND_TAB_BAR_BUTTON',
                    }
                  },
                },
              },
              {
                component: {
                  name: 'Library',
                  passProps: {
                    text: 'This is tab 2',
                  },
                  options: {
                    bottomTab: {
                      titleDisplayMode: 'showWhenActive',
                      text: 'Thư viện',
                      icon: require('../assets/images/library.png'),
                      testID: 'SECOND_TAB_BAR_BUTTON',
                    },
                  },
                },
              },
            ],
          },
        },
      ],
      options: {
        bottomTab: {
          titleDisplayMode: 'showWhenActive',
          text: 'Home',
          icon: require('../assets/images/home.png'),
          testID: 'FIRST_TAB_BAR_BUTTON',
        },
      },
    },
  },
};
