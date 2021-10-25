import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CategoryInterface, RoomInterface} from '../../../types';
import Categories from './Categories';
import Rooms from './Rooms';

interface HomeProps {
  categories: CategoryInterface[];
  rooms: RoomInterface[];
}

const Home = ({categories, rooms}: HomeProps) => {

  // console.log('categories in Home, ', categories);
  // console.log('rooms in Home, ', rooms);

  const navigation=useNavigation();

  const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={param => setCurrentCategoryId(param)}
      />
      <Rooms rooms={rooms} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
  },
});
