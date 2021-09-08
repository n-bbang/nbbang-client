import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HomeContainer from '../container/HomeContainer';
import ProfileContainer from '../container/ProfileContainer';
import MainDrawerNavigator from './MainDrawerNavigator';

interface MainStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const MainStackNavigator = (props: MainStackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={'HomeContainer'}>
      {/* <Stack.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileContainer"
        component={ProfileContainer}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="MainDrawerNavigator"
        component={MainDrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
  container: {},
});
