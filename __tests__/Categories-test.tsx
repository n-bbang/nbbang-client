import 'react-native';
import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import Categories from '../src/components/screen/Home/Categories';
import {getDummyCategories} from '../src/shared/functions/makeDummyData';

describe('Categories', () => {
  it('snapshot test', () => {
    const tree = renderer
      .create(
        <Categories
          categories={getDummyCategories(5)}
          //   currentCategoryId={currentCategoryId}
          //   setCurrentCategoryId={param => setCurrentCategoryId(param)}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
