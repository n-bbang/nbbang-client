import 'react-native';
import React, {useState} from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import Categories from '../src/components/screen/Home/Categories';
import {getDummyCategories} from '../src/shared/functions/makeDummyData';

const TestCategories = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState<number>(0);

  return (
    <Categories
      categories={getDummyCategories(5)}
      currentCategoryId={currentCategoryId}
      setCurrentCategoryId={param => setCurrentCategoryId(param)}
    />
  );
};

describe('Categories', () => {
  it('render test', () => {
      const rendered=render(<TestCategories />);
      expect(rendered).toMatchSnapshot();
  });
});
