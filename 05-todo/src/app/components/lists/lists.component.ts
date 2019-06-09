import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() done:boolean  =  true;
  @ViewChild(IonList) list:IonList;

  constructor(public _toDoService:TodoService,
              private router:Router,
              private alertCtrl:AlertController) { }

  ngOnInit() {}

  editList(list:List):void {
    if(!this.done)
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    else
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
  }

  deleteList(id:number):void {
    this._toDoService.deleteList(id);
  }

  async editTitle(list:List) {
    const alert  =  await this.alertCtrl.create({
      header: "Edit Title",
      inputs: [
        {
          name: "title",
          value: list.title,          
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: "Cancel",
          handler: () => {this.list.closeSlidingItems();}
        },
        {
          text: "Save",
          handler: (data) => {
            if(data.title.length) {
              list.title  =  data.title;
              this._toDoService.saveList();
              this.list.closeSlidingItems();
            }              
          }
        }
      ]
    });
    alert.present();
  }
}
