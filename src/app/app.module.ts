import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen01Component } from './screen01/screen01.component';
import { Screen02Component } from './screen02/screen02.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { Screen03Component } from './screen03/screen03.component';
import { Screen04Component } from './screen04/screen04.component';
import { Screen05Component } from './screen05/screen05.component';
import { Screen06Component } from './screen06/screen06.component';



@NgModule({
  declarations: [
    AppComponent,
    Screen01Component,
    Screen02Component,
    PageNotFoundComponent,
    Screen03Component,
    Screen04Component,
    Screen05Component,
    Screen06Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
