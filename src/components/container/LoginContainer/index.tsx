import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LoginContainerProps {}

const LoginContainer = (props: LoginContainerProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginContainer</Text>
    </View>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  container: {}
});
