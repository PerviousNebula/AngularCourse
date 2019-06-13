export class UsuarioModel {    
    private email:string;
    private password:string;
    private nombre:string;

    constructor() {
        this.email    =    '';
        this.password =    '';
        this.nombre   =    '';
    }
    
    set Email(email:string) { this.email = email; }
    get Email():string { return this.email; }

    set Password(password:string) { this.password = password; }
    get Password():string { return this.password; }

    set Nombre(nombre:string) { this.nombre = nombre; }
    get Nombre():string { return this.nombre; }

    public toString():string { return `Usuario:{email:${this.email},password:${this.password},nombre:${this.nombre}}`; }        
}
