import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginInput from './LoginInput';

interface LoginProps {
  navigation:any;
}

const Login = ( {navigation} : LoginProps) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <LoginInput navigation={navigation}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {}
});
