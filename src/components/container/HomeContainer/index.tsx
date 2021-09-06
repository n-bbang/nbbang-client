import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from '../../screen/Home';

interface HomeContainerProps {}

const HomeContainer = (props: HomeContainerProps) => {
  return (
    <Home />
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {}
});
