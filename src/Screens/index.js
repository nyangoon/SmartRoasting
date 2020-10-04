import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './Drawer';

export default function AppStack(){
 return(
 <NavigationContainer>
        <Drawer />
    </NavigationContainer>
    )
};
