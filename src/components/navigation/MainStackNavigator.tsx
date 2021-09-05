import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../screen/Home';

interface MainStackNavigatorProps {}

const Stack=createNativeStackNavigator();

const MainStackNavigator = (props: MainStackNavigatorProps) => {
  return (
    <Stack.Navigator
        initialRouteName={'Home'}
    >
        <Stack.Screen 
            name="Home"
            component={Home}
            options={{
                headerShown:false,
            }}
        />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
  container: {}
});
