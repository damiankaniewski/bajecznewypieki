import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import {AngularFireModule } from '@angular/fire/compat';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CakesComponent } from './cakes/cakes.component';
import { HomeComponent } from './home/home.component';
import { SweetsComponent } from './sweets/sweets.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollbackComponent } from './scrollback/scrollback.component';
import { FaqComponent } from './home/faq/faq.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';


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
    CakesComponent,
    HomeComponent,
    SweetsComponent,
    AboutComponent,
    ContactComponent,
    ScrollbackComponent,
    FaqComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideStorage(() => getStorage()),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
