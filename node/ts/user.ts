export default class User {
  constructor(private firstname: string, private lastname: string) {}

  getFullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
