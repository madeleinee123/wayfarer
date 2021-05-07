import {Component, OnInit, Input, Inject} from '@angular/core';
import {CityInfoComponent} from '../city-info/city-info.component';
import {CityService} from '../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('name') name: string;
  imageUrl: string;
  altText: string;
  cityInfo: CityInfoComponent;
  // tslint:disable-next-line:max-line-length
  constructor(private service: CityService) {
  }

  ngOnInit(): void {
    this.imageUrl = this.service.getCity(this.name).thumbnail;
    this.altText = this.service.getCity(this.name).thumbnailAltText;
    this.cityInfo = new CityInfoComponent(this.service, this.name);
  }
}
