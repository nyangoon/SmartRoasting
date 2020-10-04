import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Main from './Main';
import Roasting from './Roasting';
import CoffeBeans from './CoffeBeans';

const DrawerNav = createDrawerNavigator();

class Drawer extends Component {

  render() {
    return (
      <DrawerNav.Navigator initialRouteName="Main">
          <DrawerNav.Screen name="Main" component={Main}/>
          <DrawerNav.Screen name="Roasting" component={Roasting}/>
          <DrawerNav.Screen name="CoffeBeans" component={CoffeBeans}/>
      </DrawerNav.Navigator>
    );
  }
}

export default Drawer;
