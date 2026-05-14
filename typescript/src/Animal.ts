interface IAnimal {
  name: string;
  age: number;
  getName(): string;
}

export class Animal implements IAnimal {
  name: string;
  age: number;
  count: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get #legs() {
    return 4;
  }

  getName(): string {
    return this.name + this.#legs;
  }
}

const animal = new Animal("Dog", 5);