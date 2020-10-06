import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { CoffeeBeansButton, RecipesButton, RoastingButton } from './Components';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RoastingButton />
        <CoffeeBeansButton />
        <RecipesButton />
      </View>
    );
  }
}

export default Main;
