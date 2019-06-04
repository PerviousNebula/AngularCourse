import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() items:any[]  =  [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showArtist(item:any):void{
    if(item.type === "artist")
      this.router.navigate(["./artist",item.id]);
    else
      this.router.navigate(["./artist",item.artists[0].id]);
  }

}
