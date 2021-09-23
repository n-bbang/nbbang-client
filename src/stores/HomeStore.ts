import {makeAutoObservable} from 'mobx';
import {CategoryInterface, RoomInterface, UserInterface} from '../types';

export default class HomeStore {
  categories: CategoryInterface[] = [];
  rooms: RoomInterface[] = [];
  user: UserInterface | {} = {};

  constructor() {
    makeAutoObservable(this);
  }

  setCategories(param: CategoryInterface[]) {
    this.categories = param;
  }

  setRooms(param: RoomInterface[]) {
    this.rooms = param;
  }

  setUser(param: UserInterface) {
    this.user = param;
  }
}
