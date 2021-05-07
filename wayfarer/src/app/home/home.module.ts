import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityComponent} from './city/city.component';
import {HomeComponent} from './home.component';
import {CityInfoComponent} from './city-info/city-info.component';
import {PostComponent} from './post/post.component';
import {CityListComponent} from './city-list/city-list.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    CityComponent,
    HomeComponent,
    CityInfoComponent,
    PostComponent,
    CityListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CityComponent,
    HomeComponent,
    CityInfoComponent,
    PostComponent,
    CityListComponent
  ]
})
export class HomeModule { }
