import * as Factory from 'factory.ts';
import { RoomInterface } from '../../types';

interface CategoryInterface {
  categoryId: number;
  categoryName: string;
}

export const getDummyCategories = (iter: number) => {
  const categoryFactory = Factory.Sync.makeFactory<CategoryInterface>({
    categoryId: Factory.each(i => i),
    categoryName: '이름',
  });
  return categoryFactory.buildList(iter);
};

export const getDummyRooms=(iter:number)=>{
  const roomFactory=Factory.Sync.makeFactory<RoomInterface>({
    roomId:Factory.each(i=>i),
    platformId:Factory.each(i=>i),
    bossUserId:Factory.each(i=>i),
    roomName:'roomName',
    totalPrice:10000,
    maxUser:4,
    personalPrice:10000/4,
    recentPayment: new Date(),
  });
  return roomFactory.buildList(iter);
}