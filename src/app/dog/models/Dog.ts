export interface IDog {
  id: number | string;
  name: string;
  age: number;
  race: string;
}

export class DogModel implements IDog {
  public id: number | string;
  public name: string;
  public age: number;
  public race: string;

  constructor(instance: DogModel) {
    Object.assign(this, instance);
  }
}
