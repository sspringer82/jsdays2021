import User from './user';

class Collection<T extends { id: number }> {
  constructor(public items: T[]) {}

  getItem(id: number): T | undefined {
    console.log(this.items);
    return this.items.find((item) => item.id === id);
  }
}

const userCollection = new Collection<User>([new User('Klaus', 'Müller', 1)]);
console.log(userCollection.getItem(1));
