const nameList: string[] = [];

const addNameList = (name: string): void => {
    nameList.push(name);
}

const getName = (): void => {
    nameList.forEach(name => console.log(name));
}

const removeName = (index: number): void => {
    nameList.splice(index, 1);
}

const updateName = (index:number, name: string): void => {
    nameList.splice(index, 1, name);
}

// Com a função de criação, adicione três nomes a lista.
addNameList("Italo")
addNameList("Kaiq")
addNameList("Magalhaes")

// Em seguida, execute a função de remoção, fornecendo como índice o valor de 1
removeName(1)

// Execute também a função de edição, fornecendo como parâmetro o índice 1 e o nome Osvaldo
updateName(1, "Osvaldo")

// Por fim, execute a função de leitura.
getName();