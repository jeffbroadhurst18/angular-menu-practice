import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { StadiumComponent } from './stadium/stadium.component';
import { ParkrunComponent } from './parkrun/parkrun.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    StadiumComponent,
    ParkrunComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHKhlPIDo7ZU8sUzlcTfRkI3xCjbGJ78s'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
