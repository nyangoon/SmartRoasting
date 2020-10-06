import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Roasting from './Roasting';
import CoffeeBeans from './CoffeeBeans';

const DrawerNav = createDrawerNavigator();

class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator initialRouteName="Main">
        <DrawerNav.Screen name="Roasting" component={Roasting} />
        <DrawerNav.Screen name="CoffeeBeans" component={CoffeeBeans} />
      </DrawerNav.Navigator>
    );
  }
}

export default Drawer;
