import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityComponent} from './city/city.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    CityComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CityComponent,
    HomeComponent
  ]
})
export class HomePageModule { }
