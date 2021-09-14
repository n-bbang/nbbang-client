import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../shared/components/Header';

interface HomeProps {
  navigation:any;
}

const Home = ({
  navigation,
}: HomeProps) => {
  return (
    <View style={styles.container}>
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
