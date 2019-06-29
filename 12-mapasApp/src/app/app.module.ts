import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms'

import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

@NgModule({
  entryComponents:[
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTlzP006l77FelG7KMiawfDiGT022s9Hk'
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
