import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityInfoComponent} from './city-info/city-info.component';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CityInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRouterModule { }
