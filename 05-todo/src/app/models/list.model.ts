import { ListItem } from './list-item.model';

export class List {
    id:number;
    title:string;
    createdDate:Date;
    doneDate:Date;
    done:boolean;
    items:ListItem[];

    constructor(title:string) {
        this.id             =    new Date().getTime();
        this.title          =    title;
        this.createdDate    =    new Date();
        this.done           =    false;
        this.items          =    [];
    }

    
}