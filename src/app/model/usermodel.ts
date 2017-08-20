export class Usermodel {
    // id: number;
    name: string = '';
    email: string = '';
    password: string = '';
    hobby = [];
    hobby2 = [];
    state:string = '';
    gender='';

    constructor(values: Object = {}) { 
        Object.assign(this, values); 
    }
} 