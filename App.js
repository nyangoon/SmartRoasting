import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Navigations, { Loading } from './src/Screens';


export default function App() {
  const [isLoading = true] = useState(0);

  componentDidMount = async () => {
    setTimeout(() => { isLoading: false }, 3000);
  }

  if (isLoading) {
    return <Loading />;
  } else {
    return <Navigations />;
  }
}
