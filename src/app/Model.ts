import { Workerrr } from './Worker';

export class Model {
  items: Workerrr[];
  constructor() {
    this.items = [
      new Workerrr(1, 'Laurie ', 'Morgan', 19, new Date()),
      new Workerrr(2, 'Isla', 'Khan', 21, new Date()),
      new Workerrr(3, 'Octavia', 'Ochoa', 20, new Date()),
    ];
  }
}
