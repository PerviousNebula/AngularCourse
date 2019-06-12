import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any, alt: string = "src/assets/img/noimage.png"): string {        
    if(value === '' || value === null) {      
      return alt;
    } else {            
      return value.picture;
    }
  }

}
