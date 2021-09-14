import * as Factory from 'factory.ts';

interface CategoryInterface {
  categoryId: number;
  categoryName: string;
}

export const getDummyCategories = (iter: number) => {
  const categoryFactory = Factory.Sync.makeFactory<CategoryInterface>({
    categoryId: Factory.each(i => i),
    categoryName: '카테고리 이름',
  });
  return categoryFactory.buildList(iter);
};
