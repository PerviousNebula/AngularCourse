import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';

//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Pag1Component } from './components/pag1/pag1.component';
import { Pag2Component } from './components/pag2/pag2.component';
import { Pag3Component } from './components/pag3/pag3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Pag1Component,
    Pag2Component,
    Pag3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
