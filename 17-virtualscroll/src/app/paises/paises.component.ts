import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  public paises:any[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.obtenerPaises().subscribe((data:any) => this.paises = data);
  }

  private obtenerPaises():Observable<any> {    
    return this.http.get("https://restcountries.eu/rest/v2/lang/es");
  }

  public drop(event:CdkDragDrop<any>):void { moveItemInArray(this.paises,event.previousIndex,event.currentIndex); }

}
