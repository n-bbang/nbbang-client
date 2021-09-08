import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Home from '../../screen/Home';

interface HomeContainerProps {
  navigation: any;
}

const HomeContainer = ({navigation}: HomeContainerProps) => {
  return <Home navigation={navigation} />;
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {},
});
