import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar:boolean = true): string {
    if(activar) {
      let mask:string  =  '';
      for (let i = 0; i < value.length; i++) 
        mask  +=  '*';
      return mask;
    } else 
      return value;    
  }
}
