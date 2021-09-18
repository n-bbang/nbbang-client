import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CategoryInterface} from '../../../../types';
import CategoryItem from './CategoryItem';

interface CategoriesProps {
  categories: CategoryInterface[];
  currentCategoryId: number;
  setCurrentCategoryId: (param: number) => void;
}

const Categories = ({
  categories,
  currentCategoryId,
  setCurrentCategoryId,
}: CategoriesProps) => {
  const renderItem = ({item}: {item: CategoryInterface}) => {
    return (
      <CategoryItem
        currentCategoryId={currentCategoryId}
        setCurrentCategoryId={setCurrentCategoryId}
        categoryItem={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.containerStyle}
        data={categories}
        keyExtractor={item => String(item.categoryId)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  flatList: {
    height: 50,
    width: '100%',

    marginTop: 16,
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
