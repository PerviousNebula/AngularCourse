import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles:[`
    .ng-invalid.ng-touched:not(form) {
      animation: shake 0.3s;
    }
    
    @keyframes shake {
      0% { transform: translate(1px, 1px) rotate(0deg); }
      10% { transform: translate(-1px, -2px) rotate(-1deg); }
      20% { transform: translate(-3px, 0px) rotate(1deg); }
      30% { transform: translate(3px, 2px) rotate(0deg); }
      40% { transform: translate(1px, -1px) rotate(1deg); }
      50% { transform: translate(-1px, 2px) rotate(-1deg); }
      60% { transform: translate(-3px, 1px) rotate(0deg); }
      70% { transform: translate(3px, 1px) rotate(-1deg); }
      80% { transform: translate(-1px, -1px) rotate(1deg); }
      90% { transform: translate(1px, 2px) rotate(0deg); }
      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
  
  `]
})
export class TemplateComponent {

  usuario:any = {
    nombre:null,
    apellido:null,
    correo:null
  };

  constructor() { }

  public guardar(template:Form) {
    console.log("Formulario enviado!",template);
    console.log("Estado del objeto",this.usuario);
  }

}
