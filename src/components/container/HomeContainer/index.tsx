import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { getDummyCategories } from '../../../shared/functions/makeDummyData';
import Home from '../../screen/Home';

interface HomeContainerProps {
  navigation: any;
}

const HomeContainer = ({navigation}: HomeContainerProps) => {

  useEffect(()=>{
    console.log('dummy categories, ', getDummyCategories(10));
  }, [])

  return <Home navigation={navigation} />;
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {},
});
