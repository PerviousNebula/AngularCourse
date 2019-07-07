import { Component, OnInit } from '@angular/core';
import { CargaImagenesService } from 'src/app/providers/carga-imagenes.service';
import { FileItem } from 'src/app/models/file-item';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html'
})
export class CargaComponent implements OnInit {
  public imagenes:FileItem[];
  public estaSobreDropZone:boolean;

  constructor(public _cargarImagenes:CargaImagenesService) { 
    this.imagenes           =  [];
    this.estaSobreDropZone  =  false;
  }

  ngOnInit() {
  }
  
  public cargarImagen():void {
    this._cargarImagenes.cargarImagenes(this.imagenes);
  }

  public limpiarArchivos():void {
    this.imagenes  =  [];
  }

}
