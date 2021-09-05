import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Temp from '../screen/Temp';
import MainStackNavigator from './MainStackNavigator';

interface RootStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const RootStackNavigator = (props: RootStackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={__DEV__ ? 'Temp' : 'MainStackNavigator'}>
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
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
