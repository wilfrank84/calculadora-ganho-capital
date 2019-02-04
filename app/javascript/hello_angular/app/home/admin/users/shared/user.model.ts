export class User {
  public constructor(
    public email?: string,
    public name?: string,
    public id?: number
  ) {}

  // ========================================
  // instance methods
  // ========================================

  public jsonForRailsAPI(options?: any){
    let jsonBody = {
      email: this.email,
      name: this.name
    };

    return { user: jsonBody };
  }
}
