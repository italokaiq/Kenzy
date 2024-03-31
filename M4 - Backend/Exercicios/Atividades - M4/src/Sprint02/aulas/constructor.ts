class PersonConstructor {
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

// Instanciando...
const personExample = new PersonConstructor("Italo");
console.log(personExample.name);
personExample.saySomething("Olá, mundo!");
personExample.sayMyName()

const personExample2 = new PersonConstructor("Kaiq")
personExample2.sayMyName();
