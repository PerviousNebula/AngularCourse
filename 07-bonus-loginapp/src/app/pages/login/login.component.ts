import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:UsuarioModel;

  constructor() { 
    this.usuario  =  new UsuarioModel();
  }

  ngOnInit() {
  }

  login(loginForm:NgForm) {    
    if(loginForm.valid) {
      console.log(loginForm);
      console.log(this.usuario.toString());
    } 
  }

}
