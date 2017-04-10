import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { LoginComponent } from './login/login.component'
import { SplashScreenComponent } from './splash-screen/splash-screen.component'
@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWs9gGL7owQJbOFw27jkeGwrywVXfA3Bo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
