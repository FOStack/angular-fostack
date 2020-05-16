import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: 'home', redirectTo: '', pathMatch: 'full' },
 { path: '', loadChildren: '.pages/home/home.component#HomeModule' },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }