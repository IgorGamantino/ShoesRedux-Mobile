import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screen/Home';
import SignIn from '../screen/SingUp';
import Favorite from '../screen/Favorite';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Home" component={NavigationBottom} />
  </Auth.Navigator>
);

const Bottom = createBottomTabNavigator();

const NavigationBottom: React.FC = () => (
  <Bottom.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#191A23',
        borderTopColor: '#191A23',
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
      },

      showLabel: false,
    }}
  >
    <Bottom.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="home"
              size={28}
              color={focused ? '#e31756' : '#444458'}
            />
          );
        },
      }}
    />

    <Bottom.Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="heart"
              size={28}
              color={focused ? '#e31756' : '#444458'}
            />
          );
        },
      }}
    />

    <Bottom.Screen
      name="Cart"
      component={Cart}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="shopping-cart"
              size={28}
              color={focused ? '#e31756' : '#444458'}
            />
          );
        },
      }}
    />

    <Bottom.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon
              name="user"
              size={28}
              color={focused ? '#e31756' : '#444458'}
            />
          );
        },
      }}
    />
  </Bottom.Navigator>
);

export default AuthRoutes;
