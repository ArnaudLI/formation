import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false


  signIn() {
    //this.isAuth = true
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true
            resolve(true)
          }, 2000
        )
      }
    )
  }

  signOut() {
    this.isAuth = false
  }


  constructor() { }
}
