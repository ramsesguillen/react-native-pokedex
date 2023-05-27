import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigation } from './src/Navigation/Navigation';
import { Tabs } from './src/Navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App
