import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import CoffeeBeans from './CoffeeBeans';
import Roasting from './Roasting';
import Recipes from './Recipes';

const StackNav = createStackNavigator();

class Stack extends Component {
  render() {
    return (
      <StackNav.Navigator initialRouteName="Main">
        <StackNav.Screen name="Main" component={Main} />
        <StackNav.Screen name="Roasting" component={Roasting} />
        <StackNav.Screen name="CoffeeBeans" component={CoffeeBeans} />
        <StackNav.Screen name="Recipes" component={Recipes} />
      </StackNav.Navigator>
    );
  }
}

export default Stack;
