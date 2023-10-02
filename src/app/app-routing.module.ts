import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakesComponent } from './header/cakes/cakes.component';

const routes: Routes = [
  { path: 'cakes', component: CakesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
