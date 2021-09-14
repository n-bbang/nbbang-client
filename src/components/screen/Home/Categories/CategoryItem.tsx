import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {CategoryInterface} from '../../../../types';

interface CategoryItemProps {
  currentCategoryId: number;
  setCurrentCategoryId: (param: number) => void;
  categoryItem: CategoryInterface;
}

const CategoryItem = ({
  currentCategoryId,
  setCurrentCategoryId,
  categoryItem,
}: CategoryItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => setCurrentCategoryId(categoryItem.categoryId)}>
      <Text
        style={[
          styles.text,
          categoryItem.categoryId === currentCategoryId && styles.highlightText,
        ]}>
        {categoryItem.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {paddingVertical: 8},
  highlightText: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
});
