import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Temp from '../screen/Temp';
import LoginStackNavigator from './LoginStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';
import MainStackNavigator from './MainStackNavigator';

interface RootStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const RootStackNavigator = (props: RootStackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={__DEV__ ? 'Temp' : 'MainDrawerNavigation'}>
      <Stack.Screen
        name="Temp"
        component={Temp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen 
        name="MainDrawerNavigation"
        component={MainDrawerNavigator}
        options={{
          headerShown:false,
        }}
      /> */}
      <Stack.Screen
        name="LoginStackNavigator"
        component={LoginStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
