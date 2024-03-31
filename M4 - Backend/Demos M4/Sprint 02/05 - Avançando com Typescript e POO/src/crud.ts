interface ITech {
  id: number;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
  createdAt: Date;
  updatedAt?: Date;
}

type TCreateTechData = Omit<ITech, "id" | "createdAt" | "updatedAt">;
type TUpdateTechList = Pick<ITech, "level">;

class TechServices {
  private id = 1;
  private techList: ITech[];

  constructor(techList: ITech[]) {
    this.techList = techList;
  }

  getTechs() {
    return this.techList;
  }

  create(data: TCreateTechData) {
    const newTech = { ...data, id: this.id, createdAt: new Date() };
    this.techList.push(newTech);
    this.id++;

    return newTech;
  }

  updateTech(id: number, data: TUpdateTechList) {
    const currentTechIndex = this.techList.findIndex((tech) => tech.id === id);

    if (currentTechIndex !== -1) {
      const updateTech = {
        ...this.techList[currentTechIndex],
        ...data,
        updatedAt: new Date(),
      };

      this.techList.splice(currentTechIndex, 1, updateTech);

      return updateTech;  // o retorno nesse caso é opcional
    }
  } 

  // resolução da demo 05

  // updateTech(id:number, data: TUpdateTechList){
  //   const date = new Date();
  //   const index = this.techList.findIndex(tech => tech.id === id);
  //   const currentTech = this.techList.find(tech => tech.id === id);

  //   if (currentTech) {
  //     const updateTech = { ...currentTech, ...data, updatedAt: date }; 
  //     this.techList.splice(index, 1, updateTech);

  //     return updateTech;
  //   } else {
  //     console.error("Tecnologia não encontrada!");
      
  //   }
  // }
}