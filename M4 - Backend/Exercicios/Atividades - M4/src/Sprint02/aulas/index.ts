// POO - Programação orientada a objetos.
// class - Encapsulamento / agrupamento.

// class Person {
//     name: string = "Italo Kaiq";

//     sayHello (message: string) {
//         console.log(message);
//     }
// }

// Instanciando...
/*
const person = new Person();
console.log(person.name);
person.sayHello("Olá, mundo!")
*/
// nivéis de acesso

class Person {

   protected name: string = "Italo Kaiq"; // protected restringe o uso do recurso na instância

    public sayHello (message: string) {  // public é comportamento "default"
        console.log(message);
    }

    private saySomething(message: string) {  // private restringe o uso do recurso na instância e na herança
        console.log(message);
        
    }
}

const personProtect = new Person();
personProtect.sayHello("Olá, mundo!")