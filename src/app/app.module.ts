import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { StadiumComponent } from './stadium/stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    StadiumComponent
  ],
  imports: [
    BrowserModule//,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
