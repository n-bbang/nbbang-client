import {makeAutoObservable} from 'mobx';
import { CategoryInterface, RoomInterface } from '../types';

export default class HomeStore{
    categories:CategoryInterface[]=[];
    rooms:RoomInterface[]=[];

    constructor(){
        makeAutoObservable(this);
    }

    setCategories(param:CategoryInterface[]){
        this.categories=param;
    }

    setRooms(param:RoomInterface[]){
        this.rooms=param;
    }
}