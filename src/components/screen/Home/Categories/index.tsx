import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CategoryInterface} from '../../../../types';

interface CategoriesProps {
  categories: CategoryInterface[];
}

const Categories = ({categories}: CategoriesProps) => {

const renderItem=({item}:{item:CategoryInterface}) => {
    return (
      <TouchableOpacity>
        <Text>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.containerStyle}
      data={categories}
      keyExtractor={item => String(item.categoryId)}
      renderItem={renderItem}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
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
