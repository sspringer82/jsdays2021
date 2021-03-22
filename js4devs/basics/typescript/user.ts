export default class User {
  age = 42;

  constructor(
    public firstname: string,
    public lastname: string,
    public id: number,
  ) {}

  private concatenateName() {
    return `${this.firstname} ${this.lastname}`;
  }

  getFullname(): string {
    return this.concatenateName();
  }

  greet(): void {
    console.log(this.getFullname());
  }
}
