import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './../../service/auth/auth.service'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  userStatus: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userStatus = this.authService.isAuth
  }

  public signIn() {
    this.authService.signIn().then(
      () => {
        console.log('retour de promesse')
        this.userStatus = this.authService.isAuth
        this.router.navigate(['machine'])
      }
    )
  }

  public signOut() {
    this.authService.signOut();
    this.userStatus = this.authService.isAuth
  }

}
