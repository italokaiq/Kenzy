export class PersonClass {
    name: string;

    constructor(name: string){
        this.name = name;

    }

    saySomething (message: string) {
        console.log(message);
    }

    sayMyName (){
        console.log(`Meu nome é ${this.name}`);
        
    }
}

export class StudentClass extends PersonClass { 
    module: string;

    constructor(name: string, module: string){
        super(name);
        this.module = module;
    }

    sayMyModule (){
        console.log(`Estou matrículado no modulo: ${this.module}`);
        
    }
}