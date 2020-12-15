import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './component/authentification/authentification.component'
import { MachineComponent } from './component/machine/machine.component'
import { SingleMachineComponent } from './component/single-machine/single-machine.component'
import { ErrorNavigationComponent } from './component/error-navigation/error-navigation.component'

import { AuthGuardService } from './service/auth-guard/auth-guard.service'

const routes: Routes = [
  {
    path: 'auth', component: AuthentificationComponent
  }, {
    path: 'machine', canActivate: [AuthGuardService], component: MachineComponent
  }, {
    path: 'machine/:id', canActivate: [AuthGuardService], component: SingleMachineComponent
  }, {
    path: '', component: AuthentificationComponent
  }, {
    path: 'notfound', component: ErrorNavigationComponent
  }, {
    path: '**', redirectTo: 'notfound'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
