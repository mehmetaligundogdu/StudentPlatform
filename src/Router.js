import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/AnaSayfa';
import Sign from './pages/StudentSign';
import StudentProfile from './pages/StudentProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="StudentSign" component={Sign} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
