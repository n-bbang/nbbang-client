import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'

import { DrawerActions } from '@react-navigation/routers';
import InputBox from './Auth/InputBox';

interface LoginProps {
  navigation: any;
}

const LoginInput = ({ navigation }: LoginProps) => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text>Nbbang</Text>
      </View>
      <InputBox/>
    </SafeAreaView>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal:16
  },
  button: {

  },
  title: {
    alignSelf: 'center',
    paddingTop: 100
  }
});
