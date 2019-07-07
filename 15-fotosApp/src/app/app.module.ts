import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//Routes
import { AppRoutingModule } from './app.router';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { CargaComponent } from './pages/carga/carga.component';
import { NgDropFileDirective } from './directives/ng-drop-file.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotosComponent,
    CargaComponent,
    NgDropFileDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
