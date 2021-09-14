import {makeAutoObservable} from 'mobx';
import { CategoryInterface } from '../types';

export default class HomeStore{
    categories:CategoryInterface[]=[];

    constructor(){
        makeAutoObservable(this);
    }

    setCategories(param:CategoryInterface[]){
        this.categories=param;
    }
}