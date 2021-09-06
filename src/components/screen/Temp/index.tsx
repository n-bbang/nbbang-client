import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface TempProps {
  navigation: any;
}

const Temp = ({navigation}: TempProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => navigation.navigate('MainStackNavigator')}
        title="홈으로 가기"
      />
      <Button 
        onPress={()=>navigation.navigate('LoginStackNavigator')}
        title='로그인 페이지로 가기'
      />
    </SafeAreaView>
  );
};

export default Temp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
