import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityComponent} from './city/city.component';
import {HomeComponent} from './home.component';
import {CityInfoComponent} from './city-info/city-info.component';
import {PostComponent} from './post/post.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    CityComponent,
    HomeComponent,
    CityInfoComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    CityInfoComponent,
    PostComponent,
    CityComponent
  ]
})
export class HomeModule { }
