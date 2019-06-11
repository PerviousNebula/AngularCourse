import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {     
    console.log("%c parametro ruta padre","background:green;color:white",this.activatedRoute.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
  }

}
