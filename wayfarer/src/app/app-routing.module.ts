import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/about/about.component';
import { HomeComponent } from './home/home.component';
import {CityInfoComponent} from './home/city-info/city-info.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cities/:id',
    component: CityInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
