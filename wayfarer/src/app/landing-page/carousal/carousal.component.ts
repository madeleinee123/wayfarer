import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  ngOnInit() { }

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  stopSlider() {
    this.carousel.pause();
  }
}
