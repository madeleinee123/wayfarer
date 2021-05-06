import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input('name') name: string;
  @Input('imageUrl') imageUrl: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
