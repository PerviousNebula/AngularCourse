import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES:string;

  constructor(private db:AngularFirestore) { 
    this.CARPETA_IMAGENES  =  "img";
  }

  public cargarImagenes(imagenes:FileItem[]):void {
    const storageRef  =  firebase.storage().ref();
    for(const item of imagenes) {
      item.estaSubiendo  =  true;
      if(item.progreso < 100) {
        const uploadTask:firebase.storage.UploadTask  =  
          storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
                    .put(item.archivo);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot)  =>  item.progreso  =  (snapshot.bytesTransferred / snapshot.totalBytes * 100),
          (err)  =>  console.error("Error al subir",err),
          ()  => {            
            item.estaSubiendo  =  false;            
            uploadTask.snapshot.ref.getDownloadURL().then((url:string) => {
              item.url  =  url              
              this.guardarImagen({nombre:item.nombreArchivo,url:url});
            });
        });                        
      }
    }    
  }

  private guardarImagen(imagen:{nombre:string,url:string}) {
    console.log(imagen);
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
