import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/about/about.component';
import { HomeComponent } from './home-page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
