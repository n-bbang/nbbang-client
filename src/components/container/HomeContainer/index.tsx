import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HomeContainerProps {}

const HomeContainer = (props: HomeContainerProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeContainer</Text>
    </View>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {}
});
