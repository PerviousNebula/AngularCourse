import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(movie: any): string {
    if(movie.poster_path)
      return `http://image.tmdb.org/t/p/w342/${movie.poster_path}`;
    else
      return `assets/images/noimage.jpg`;
  }

}
