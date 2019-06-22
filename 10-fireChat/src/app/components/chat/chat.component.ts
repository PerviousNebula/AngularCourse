import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  mensaje:string;
  elemento:any;

  constructor(public _cs:ChatService) { 
    this._cs.cargarMensajes().subscribe(() => {
      setTimeout(() => this.elemento.scrollTop  =  this.elemento.scrollHeight, 20);      
    });
  }

  ngOnInit() {
    this.elemento  =  document.getElementById("app-mensajes");
  }

  public enviarMensaje():void {
    if(this.mensaje.length)
      this._cs.agregarMensaje(this.mensaje).then(() => {
        this.mensaje  =  "";
      }).catch((err) => {
        console.error("Error al enviar", err);
      });    
  }
}
