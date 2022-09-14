const screens = [
  {
    stack: {
      id: 'HomeStack',
      children: [
        {
          component: {
            name: 'Home',
          },
        },
      ],
      options: {
        topBar: {
          visible: false,
        },
        bottomTab: {
          text: 'Home',
          textColor: 'gray',
          icon: require('../assets/home.png'),
          selectedIconColor: 'blue',
          selectedTextColor: 'blue',
        },
      },
    },
  },
  {
    stack: {
      id: 'MoreStack',
      children: [
        {
          component: {
            name: 'More',
          },
        },
      ],
      options: {
        topBar: {
          visible: false,
        },
        bottomTab: {
          text: 'More',
          textColor: 'gray',
          icon: require('../assets/more.png'),
          selectedIconColor: 'blue',
          selectedTextColor: 'blue',
        },
      },
    },
  },
  
];

export const rootStack = {
  bottomTabs: {
    children: screens,
    options: {
      bottomTabs: {
        hideShadow: true,
      },
    },
  },
};

export const modalStack = {
  stack: {
    children: [
      {
        component: {
          name: 'MainModal',
          options: {
            topBar: {
              title: {
                text: 'My Modal',
              },
              background: {
                color: 'whitesmoke',
              },
              noBorder: true,
              scrollEdgeAppearance: {
                background: {},
                active: false,
                noBorder: true,
              },
              rightButtons: [{
                id: 'add',
                text: 'Add',
                textColor: 'blue',
              }],
            },
          },
        },
      },
    ],
  },
};

export const addModelDataComponent = {
  component: {
    name: 'AddDataModal',
    options: {
      topBar: {
        title: {
          text: 'Adding Data',
        },
        background: {
          color: 'whitesmoke',
        },
        noBorder: true,
        scrollEdgeAppearance: {
          background: {},
          active: false,
          noBorder: true,
        },
        backButton: {
          popStackOnPress: true,
          showTitle: false,
        },
      },
    },
  },
};
