export class AuthService {
  private isAuth: boolean = false;

  public changeAuth():void{
    this.isAuth = !this.isAuth;
  }

  public getState():boolean{
    return this.isAuth;
  }
}
