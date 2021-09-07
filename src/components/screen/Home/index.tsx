import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
      flex:1,
  }
});
