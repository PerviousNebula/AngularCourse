import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list:List;
  itemDesc:string;

  constructor(private _toDoService:TodoService,
              private activatedRoute:ActivatedRoute) { 
    const id   =  this.activatedRoute.snapshot.paramMap.get("listId");
    this.list  =  this._toDoService.getList(id);    
  }

  ngOnInit() {
  }

  addElement():void {    
    if(!this.itemDesc.length)
      return;
    const item  =  new ListItem(this.itemDesc);
    this.list.items.push(item);
    this.itemDesc  =  '';
    this._toDoService.saveList();
  }

  changeState(item:ListItem):void {
    const unfinished  =  this.list.items.filter(itemsData  =>  !itemsData.done).length;
    if(!unfinished) {
      this.list.doneDate  =  new Date();
      this.list.done      =  true;
    } else {
      this.list.doneDate  =  null;
      this.list.done      =  false;
    }
    this._toDoService.saveList();      
  }

  deleteItem(i:number):void {
    this.list.items.splice(i,1);
    this._toDoService.saveList();
  }
}