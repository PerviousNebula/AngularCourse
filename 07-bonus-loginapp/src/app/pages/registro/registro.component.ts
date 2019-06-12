import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  public usuario:UsuarioModel;
  
  constructor() { }

  ngOnInit() { 
    this.usuario  =  new UsuarioModel();
  }

  onSubmit() {
    console.log(this.usuario.toString());
  }

}
