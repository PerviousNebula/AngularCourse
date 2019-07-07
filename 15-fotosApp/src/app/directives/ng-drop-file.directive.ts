import { Directive, HostListener, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFile]'
})
export class NgDropFileDirective {
  @Input() archivos:FileItem[];
  @Output() mouseSobre:EventEmitter<boolean>;
  
  constructor() { 
    this.archivos    =  [];
    this.mouseSobre  =  new EventEmitter();
  }

  @HostListener('dragover', ['$event']) public onDragEnter(event:any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event:any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event']) public onDrop(event:any) {    
    const transferencia  =  this._getTransferencia(event);

    if(transferencia) {
      this._extraerArchivos(transferencia.files);
      this._prevenirDetener(event);
      this.mouseSobre.emit(false);
    }
  }

  private _getTransferencia(event:any):any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos(archivosLista:FileList):void {
    let nuevoArchivo:FileItem;
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemporal  =  archivosLista[propiedad];
      if(this._archivoPuedeSerCargado(archivoTemporal)) {
        nuevoArchivo  =  new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }
  }

  //Validaciones
  private _archivoPuedeSerCargado(archivo:File):boolean {
    if(!this._fileDropped(archivo.name) && this._esImagen(archivo.type))
      return true;
    else
      return false;
  }

  private _prevenirDetener(event):void {
    event.preventDefault();
    event.stopPropagation();
  }  

  private _fileDropped(nombreArchivo:string):boolean {
    for (const archivo of this.archivos) 
      if(archivo.nombreArchivo  ===  nombreArchivo)
        return true;
    return false;
  }

  private _esImagen(tipoArchivo:string):boolean {
    return (tipoArchivo  ===  ''  || tipoArchivo  === undefined) ? false : tipoArchivo.startsWith('image');
  }

}
