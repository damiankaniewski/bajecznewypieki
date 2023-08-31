import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import {AngularFireModule } from '@angular/fire/compat';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
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
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
