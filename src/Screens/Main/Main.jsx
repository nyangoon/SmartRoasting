import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { CoffeeBeansButton, RecipesButton, RoastingButton, RoastingInformationButton } from './Components';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={style.container}
      >
        <RoastingButton style={style} />
        <CoffeeBeansButton style={style} />
        <RoastingInformationButton style={style} />
        <RecipesButton style={style} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#BF926E",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "stretch",
    padding: "18%"
  },
  RoastingButton: {
    flex: 2,
    backgroundColor: "#ffffff",
    width: "100%",
    justifyContent: "center",
    marginBottom: "5%",
    borderRadius: 10

  },
  Buttons: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginVertical: "5%",
    backgroundColor: "skyblue",
    borderRadius: 10


  },
  ButtonFont: {
    alignSelf: "center",
    fontSize: 20
  }
})