import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from '../../screen/Login';

interface LoginContainerProps {}

const LoginContainer = (props: LoginContainerProps) => {
  return (
    <Login />
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  container: {}
});
