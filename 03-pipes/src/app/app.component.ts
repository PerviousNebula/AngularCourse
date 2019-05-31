import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title                = 'pipes';
  nombre:string        =  "Arturo Nevarez";
  arreglo:number[]     =  [1,2,3,4,5,6,7,8,9,10];
  PI:number            =  Math.PI;
  a:number             =  0.234;
  salario:number       =  1234.5;
  heroe:any            =  {
    nombre:"Logan",
    clave:"Wolverine",
    direccion: {
      calle:"Siempre Viva",
      casa:"Xmen Mansion"
    }
  };
  valorPromesa        =  new Promise((resolve,reject)  =>  {
    setTimeout(()  =>  {
      resolve("Llegó la data!");
    },3500);
  });
  fecha                =  new Date();
  nombre2:string       =  "arTuRo neVareZ vILLa";
  video:string         =  "1QJLTp8587o";
}
