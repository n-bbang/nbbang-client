import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CategoryInterface} from '../../../types';
import Categories from './Categories';

interface HomeProps {
  navigation: any;
  categories: CategoryInterface[];
}

const Home = ({navigation, categories}: HomeProps) => {
  const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={param => setCurrentCategoryId(param)}
      />
      <Text>Home</Text>
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
