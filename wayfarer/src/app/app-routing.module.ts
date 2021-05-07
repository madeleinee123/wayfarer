import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/about/about.component';
import { HomeComponent } from './home/home.component';
import { CityInfoComponent } from './home/city-info/city-info.component';
import { PostComponent } from './home/post/post.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'cities/:id',
        component: CityInfoComponent,
        children: [
          {
            path: 'post/:id/show',
            component: PostComponent,
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
