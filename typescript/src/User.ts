import { Person } from "./Person";

export class User extends Person {
  #name: string;
  age: number;
  static count: number = 0;

  constructor(name: string, age: number) {
    super();
    this.#name = name;
    this.age = age;
  }

  increment() {
    User.count++;
  }

  getName(): string {
    return this.#name;
  }
}