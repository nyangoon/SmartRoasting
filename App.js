import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigations, { Loading } from './src/Screens';


export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false) }, 3000)
  });

  if (isLoading) {
    return <Loading />;
  } else {
    return <Navigations />;
  }
}
