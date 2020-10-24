import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Roasting from './Roasting';
import CoffeeBeans from './CoffeeBeans';
import Recipes from './Recipes';

const DrawerNav = createDrawerNavigator();

class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator>
        <DrawerNav.Screen name="Roasting" component={Roasting} />
        <DrawerNav.Screen name="CoffeeBeans" component={CoffeeBeans} />
        <DrawerNav.Screen name="Recipes" component={Recipes} />
      </DrawerNav.Navigator>
    );
  }
}

export default Drawer;
