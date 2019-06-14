import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:UsuarioModel;
  private remberme:boolean;

  constructor(private _auth:AuthService,
              private  router:Router) { 
    this.usuario  =  new UsuarioModel();
    this.remberme =  false;
  }

  ngOnInit() {      
    if(localStorage.getItem("email")) {
      this.usuario.Email  =  localStorage.getItem("email");
      this.remberme       =  true;
    }
  }

  login(loginForm:NgForm) {    
    if(loginForm.valid) {      
      Swal.fire({
        type:  'info',
        title: 'Iniciando Sesión',
        text:  'Espere por favor...',
        allowOutsideClick: false,        
      });
      Swal.showLoading();

      this._auth.login(this.usuario).subscribe((data) => {
        Swal.close();
        if(this.remberme)
          localStorage.setItem("email",loginForm.controls.email.value);
        this.router.navigateByUrl("/home");
      }, (err) => {
        Swal.fire({
          type: 'error',
          title: 'Hubo un problema!',
          text: err.error.error.message,          
        });        
      });
    } 
  }

  get RememberMe():boolean { return this.remberme; }
  set RememberMe(option:boolean) { this.remberme  =  option; }

}
