import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  public usuario:UsuarioModel;
  private rememberMe:boolean;
  
  constructor(private _auth:AuthService,
              private router:Router) { }

  ngOnInit() { 
    this.usuario  =  new UsuarioModel();
  }

  onSubmit(registerForm:NgForm) {
    if(registerForm.valid) {
      Swal.fire({
        type: 'info',
        title: 'Registrando nuevo usuario',
        text: 'Espere por favor...',
        allowOutsideClick: false
      });
      Swal.showLoading();
      this._auth.signup(this.usuario).subscribe(data => {
        Swal.fire({
          type: 'success',
          title: 'Registro exitoso!',
          text: 'La cuenta ha sido registrada exitosamente',          
        });
        if(this.rememberMe)
          localStorage.setItem("email",registerForm.controls.email.value);
        this.router.navigateByUrl("/home");
      }, (err) => {        
        Swal.fire({
          type: 'error',
          title: 'Hubo un problema!',
          text: err.error.error.message,          
        })
      });
    }
  }

  get RememberMe():boolean { return this.rememberMe }
  set RememberMe(option:boolean) { this.rememberMe = option }

}
