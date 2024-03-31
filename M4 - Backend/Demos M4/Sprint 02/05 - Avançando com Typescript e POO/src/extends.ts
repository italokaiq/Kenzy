class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`Olá ${this.name}!`);
  }
}

class Programmer extends Person {
    stack: string[];

    constructor(name: string, stack: string[]){
        super(name); // transportar parâmetros para a classe herdada.
        this.stack = stack;
    }

    showMyStacks(){
        console.table(this.stack);
        
    }
}

const programmer = new Programmer("Italo", ["JavaScript", "Reactjs", "Express", "NodeJS"]);

programmer.sayHello();
programmer.showMyStacks();
