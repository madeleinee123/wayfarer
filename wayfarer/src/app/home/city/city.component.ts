import { Component, OnInit, Input } from '@angular/core';
import {CityInfoComponent} from '../city-info/city-info.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input('name') name: string;
  @Input('imageUrl') imageUrl: string;
  @Input('altText') altText: string;
  @Input('id') id: number;
  cityInfo: CityInfoComponent;
  constructor() {
  }

  ngOnInit(): void {
  }
  setCityInfo(info: CityInfoComponent): void{
    this.cityInfo = info;
  }
}
