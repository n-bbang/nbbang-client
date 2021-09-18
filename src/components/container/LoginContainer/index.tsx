import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from '../../screen/Login';

interface LoginContainerProps {
  navigation : any;
}

const LoginContainer = ({navigation}: LoginContainerProps) => {
  return (
    <Login navigation={navigation}/>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  container: {}
});
