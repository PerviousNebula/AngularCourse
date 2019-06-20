import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url:string;
  
  constructor(private http:HttpClient) { 
    this.url  =  "https://loginapp-e45b5.firebaseio.com";
  }

  public createHeroe(heroe:HeroeModel):Observable<any> {    
    return this.http.post(`${this.url}/heroes.json`,heroe).pipe(
      map((data:any) => {
        heroe.id  =  data.name;        
        return heroe;
      })
    );    
  }

  public updateHeroes(heroe:HeroeModel):Observable<any> {
    const heroeTemp = { ...heroe };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`,heroeTemp);
  }

  public getHeroes():Observable<any> {
    return this.http.get(`${this.url}/heroes.json`).pipe(map((data:any) => data  =  this.convertHeroesToArry(data)));
  }

  public getHeroe(id:string):Observable<any> {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  public deleteHeroe(id:string):Observable<any> {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  private convertHeroesToArry(heroes:any):Array<any> {
    const heroesArry:Array<any>  =  [];
    Object.keys(heroes).forEach(key => {
      const heroeTemp  =  heroes[key];
      heroeTemp.id     =  key;
      heroesArry.push(heroeTemp);
    });
    return heroesArry;
  }
}
