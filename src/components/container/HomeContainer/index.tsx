import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { getDummyCategories } from '../../../shared/functions/makeDummyData';
import { CategoryInterface } from '../../../types';
import Home from '../../screen/Home';

interface HomeContainerProps {
  navigation: any;
}

const HomeContainer = ({navigation}: HomeContainerProps) => {

  const [categories, setCategories]=useState<CategoryInterface[]>([]);

  useEffect(()=>{
    setCategories(getDummyCategories(5))
  }, [])

  return <Home navigation={navigation} categories={categories} />;
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {},
});
