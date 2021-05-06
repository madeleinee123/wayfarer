import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {LandingPageModule} from './landing-page/landing-page.module';
import {HomeModule} from './home/home.module';
import { CityListComponent } from './home/city-list/city-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    HomeModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
