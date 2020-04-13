import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// IMPORTS STACKS
import Shop from '~/navigations/TeamStack';

// IMPORTS PAGES
import Home from '~/pages/Home';
import Connections from '~/pages/Dashboard';
import Configurations from '~/pages/Dashboard';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '~/styles'


const AppStackTabBottom = createBottomTabNavigator(
  {
    Home,
    Shop,
    Connections,
    Configurations
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Shop') {
          iconName = `suitcase`;
        } else if (routeName === 'Connections') {
          iconName = `network-wired`;
        } else if (routeName === 'Configurations') {
          iconName = `cogs`
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white' ,
      inactiveTintColor: colors.secondary,
      showLabel: false,
      style:{
        backgroundColor: colors.primary,
      },
      tabStyle: {
        backgroundColor: colors.primary,
      }
    },
    initialRouteName: 'Shop'
  }
);

export default createAppContainer(AppStackTabBottom);