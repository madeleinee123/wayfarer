import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {LandingPageModule} from './landing-page/landing-page.module';
import {HomeModule} from './home/home.module';
import {CityService} from './services/city.service';

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
  providers: [CityService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
