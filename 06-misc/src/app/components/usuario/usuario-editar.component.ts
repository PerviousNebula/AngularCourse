import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    console.log("%c parametro ruta hija","background:blue;color:white",this.activatedRoute.parent.snapshot.paramMap.get("id"));    
  }

  ngOnInit() {
  }

}
