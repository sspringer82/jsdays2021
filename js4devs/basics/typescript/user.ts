export default class User {
  constructor(public firstname: string, public lastname: string) {}

  getFullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  greet(): void {
    console.log(this.getFullname());
  }
}
