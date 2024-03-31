class Student {
    name: string;
    module: string;
    grade: number | null = null;

    constructor (name: string, module:string) {
        this.name = name;
        this.module = module;
    }

    sayHello (){
        console.log(`Meu nome é ${this.name} e estou no módulo "${this.module}"!`);
    }

    setGrade (grade: number){
        this.grade = grade; 
    }

    getGrade (){
        console.log(`Nome: ${this.name}, Módulo: "${this.module}", Nota: ${this.grade}.`);
        
    }
}
// Instancie a classe e forneça como parâmetros "Osvaldo" e "M4".
const student1 = new Student("Osvaldo", "M4");

// Execute sayHello, este deve imprimir a mensagem com o nome e o módulo de forma correta.
student1.sayHello();

// Execute o método setGrade passando como parâmetro a nota 10.
student1.setGrade(10);

student1.getGrade();

// Instância extra :)
const student2 = new Student("Italo Kaiq", "M4");
student2.sayHello();
student2.setGrade(1000);
student2.getGrade();