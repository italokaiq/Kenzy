export class PersonPolimorfism {
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

export class StudentClass extends PersonPolimorfism { 
    module: string;

    constructor(name: string, module: string){
        super(name);
        this.module = module;
    }

    sayMyModule (){
        console.log(`Estou matrículado no modulo: ${this.module}`);
        
    }
}

//polimorfismo: arquivo de exemplo continua sendo o herancaExample.ts.

export class Teacher extends PersonPolimorfism{
    sayMyName(): void {
        console.log(`Sou o professor ${this.name}`);
        
    }
}
