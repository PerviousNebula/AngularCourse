import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats:Mensaje[];
  usuario:any;
  
  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) { 
    this.chats    =  [];
    this.usuario  =  {};
    this.afAuth.authState.subscribe((user:any) => {
      if(user) {
        this.usuario.nombre  =  user.displayName;
        this.usuario.uid     =  user.uid;
      }
    });
  }

  public cargarMensajes():Observable<any> {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(map((mensajes:Mensaje[]) => {
      this.chats  =  [];
      for(let mensaje of mensajes) 
        this.chats.unshift(mensaje);            
      return this.chats;
    }));    
  }
  
  public agregarMensaje(texto:string) {  
    // TODO falta el uid del usuario
    let mensaje:Mensaje  =  {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add(mensaje);
  }

  public ingresar(servicio:string):void {
    if(servicio === 'google')
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    if(servicio === 'facebook')
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  public salir():void {
    this.usuario  =  {};
    this.afAuth.auth.signOut();
  }
}
