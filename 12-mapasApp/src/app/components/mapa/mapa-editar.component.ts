import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-editar',
  template: `
    <h1 mat-dialog-title>Editar marcador</h1>
    <div mat-dialog-content>
      <form [formGroup]="forma">      
        <mat-form-field><input matInput placeholder="Título" formControlName="titulo"></mat-form-field>      
        <mat-form-field><input matInput placeholder="Descripción" formControlName="desc"></mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button color="warn" (click)="onNoClick()">Cancelar</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="data.animal" cdkFocusInitial (click)="guardarCambios()">Guardar</button>
    </div>
  `
})
export class MapaEditarComponent implements OnInit {  
  public forma:FormGroup;

  constructor(public fb:FormBuilder,
              public dialogRef: MatDialogRef<MapaEditarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {                 
                this.forma  =  fb.group({
                  "titulo": data.titulo,
                  "desc":  data.desc
                });
  }

  ngOnInit() {
  }

  public guardarCambios():void {
    this.dialogRef.close(this.forma.value);
  }

  public onNoClick():void {
    this.dialogRef.close();
  }

}
