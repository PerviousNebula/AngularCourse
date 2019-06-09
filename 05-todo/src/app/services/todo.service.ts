import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Lists:List[]  =  [];

  constructor() { 
    this.loadLists();
  }

  createList(title:string):number {
    const newList  =  new List(title);
    this.Lists.push(newList);
    this.saveList();
    return newList.id;
  }

  deleteList(id:number):void {
    this.Lists  =  this.Lists.filter(listData  =>  listData.id  !== id);
    this.saveList();
  }

  saveList():void {
    localStorage.setItem("data",JSON.stringify(this.Lists));
  }

  loadLists():void {
    if(localStorage.getItem("data"))
      this.Lists  =  JSON.parse(localStorage.getItem("data"));
  }

  getList(id:string | number):List {
    id  =  Number(id);
    return this.Lists.find((DataList) => DataList.id  ===  id);
  }
}
