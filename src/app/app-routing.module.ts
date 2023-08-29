
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakesComponent } from './cakes/cakes.component';
import { SweetsComponent } from './sweets/sweets.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cakes', component: CakesComponent },
  { path: 'sweets', component: SweetsComponent },
  { path: 'flavors', component: FlavorsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
