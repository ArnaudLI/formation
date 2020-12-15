import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './component/machine/machine.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { AppRenderComponent } from './component/app-render/app-render.component';
import { SingleMachineComponent } from './component/single-machine/single-machine.component';
import { ErrorNavigationComponent } from './component/error-navigation/error-navigation.component'

import { MachineService } from './service/machine/machine.service';
import { AuthGuardService } from './service/auth-guard/auth-guard.service'
import { AuthService } from './service/auth/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    AuthentificationComponent,
    AppRenderComponent,
    SingleMachineComponent,
    ErrorNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MachineService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
