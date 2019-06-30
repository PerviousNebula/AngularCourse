import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pag1Component } from './components/pag1/pag1.component';
import { Pag2Component } from './components/pag2/pag2.component';
import { Pag3Component } from './components/pag3/pag3.component';

const routes: Routes = [
    { path: 'pag1', component: Pag1Component },
    { path: 'pag2', component: Pag2Component },
    { path: 'pag3', component: Pag3Component },
    { path: '',     pathMatch:'full', redirectTo:'pag1'},
    { path: '**',   pathMatch:'full', redirectTo:'pag1'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
