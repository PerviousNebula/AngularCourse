import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public _toDoService:TodoService,
              private router:Router,
              private alertCtrl:AlertController) {}


  async addList() {
    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [
        {
          name:"title",
          type:"text",        
          placeholder:"List Name"
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: "Cancel"
        },
        {
          text: "Save",
          handler: (data) => {
            if(data.title.length) {              
              const id  =  this._toDoService.createList(data.title);                    
              this.router.navigate(["tabs","tab1","add",id]);
            }
          }
        }
      ]
    });
    alert.present();
  }
}
