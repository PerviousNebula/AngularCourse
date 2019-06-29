import { NgModule } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
