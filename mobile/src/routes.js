import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Incidents from '../src/pages/Incidents'
import Detail from '../src/pages/Detail'

const Routes = () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name='incidents' component={Incidents} />
      <AppStack.Screen name='detail' component={Detail} />
    </AppStack.Navigator>
  </NavigationContainer>
)

export default Routes
