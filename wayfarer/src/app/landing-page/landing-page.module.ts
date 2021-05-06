import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarousalComponent} from './carousal/carousal.component';
import {AboutComponent} from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AboutComponent,
    CarousalComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AboutComponent,
    CarousalComponent
  ]
})
export class LandingPageModule { }
