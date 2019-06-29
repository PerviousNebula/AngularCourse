export class Marcador {
    titulo:string;
    desc:string;
    lat:number;
    lng:number;

    constructor(lat:number,lng:number,titulo?:string,desc?:string) {
        this.lat    =    lat;
        this.lng    =    lng;
        this.titulo =    titulo;
        this.desc   =    desc;
    }
}