import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import {AngularFireModule } from '@angular/fire/compat';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CakesComponent } from './cakes/cakes.component';
import { SweetsComponent } from './sweets/sweets.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

var firebaseConfig = {
    projectId: 'bajeczne-wypieki',
    appId: '1:911397378151:web:6e76b24f0040f956c7dcc2',
    storageBucket: 'bajeczne-wypieki.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyD0whUapkvCSc3REWkS6zwFxIfIXEdghss',
    authDomain: 'bajeczne-wypieki.firebaseapp.com',
    messagingSenderId: '911397378151',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CakesComponent,
    SweetsComponent,
    FlavorsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
