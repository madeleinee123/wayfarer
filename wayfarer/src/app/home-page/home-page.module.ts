import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityComponent} from './city/city.component';
import {HomeComponent} from './home/home.component';
import {CityInfoComponent} from './city-info/city-info.component';
import {PostComponent} from './post/post.component';

@NgModule({
  declarations: [
    CityComponent,
    HomeComponent,
    CityInfoComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CityComponent,
    HomeComponent,
    CityInfoComponent,
    PostComponent
  ]
})
export class HomePageModule { }
