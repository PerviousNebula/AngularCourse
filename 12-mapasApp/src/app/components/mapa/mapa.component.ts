import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: [`
    agm-map {
      height: 600px;
    }
  `]
})
export class MapaComponent implements OnInit {
  marcadores:Marcador[];  

  constructor(private _snackBar: MatSnackBar,
              public dialog: MatDialog) {     
    if(localStorage.getItem("marcadores")) 
      this.marcadores  =  JSON.parse(localStorage.getItem("marcadores"));
    else  
      this.marcadores  =  [];
  }

  ngOnInit() {
  }

  public agregarMarcador(event):void {
    const marcador  =  new Marcador(event.lat,event.lng);
    this.marcadores.push(marcador);
    this.guardarStorage();
    this._snackBar.open("Marcador Agregado!","Cerrar",{duration: 3000});
  }

  public editarMarcador(marcador:Marcador):void {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {...marcador}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        marcador.titulo  =  result.titulo;
        marcador.desc    =  result.desc;
        this.guardarStorage();
        this._snackBar.open("Marcador Actualizado!","Cerrar",{duration: 3000});
      }
    });
  }

  public borrarMarcador(index:number):void {
    this.marcadores.splice(index,1);
    this.guardarStorage();
    this._snackBar.open("Marcador Borrado!","Cerrar",{duration: 3000});
  }

  public guardarStorage():void {
    localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
  }

}
