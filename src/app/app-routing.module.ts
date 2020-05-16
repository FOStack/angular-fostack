import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: '', redirectTo: 'hello', pathMatch: 'full' },
 { path: 'hello', loadChildren: './hello.component#HelloComponent' },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }