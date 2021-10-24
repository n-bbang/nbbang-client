import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginInput from './LoginInput';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <View style={styles.container}>
      <LoginInput />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {},
});
