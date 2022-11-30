export interface IUser {
  name: string;
  age: number;
}

export class User implements IUser {
  name: string;
  age: number;

  constructor(name?: string, age?: number) {
    this.name = name ? name : "";
    this.age = age ? age : 0;
  }
}
