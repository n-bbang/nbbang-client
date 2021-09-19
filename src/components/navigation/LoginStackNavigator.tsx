import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HomeContainer from '../container/HomeContainer';
import LoginContainer from '../container/LoginContainer';
import ProfileContainer from '../container/ProfileContainer';
import Auth from '../screen/Login/Auth/Auth';

interface LoginStackNavigatorProps {}

const Stack = createNativeStackNavigator();

const LoginStackNavigator = (props: LoginStackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={'HomeContainer'}>
      <Stack.Screen
        name="LoginContainer"
        component={LoginContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;

const styles = StyleSheet.create({
  container: {},
});
