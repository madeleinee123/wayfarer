import { Injectable } from '@angular/core';
import {PostComponent} from '../home/post/post.component';
import {CityInfoComponent} from '../home/city-info/city-info.component';
import {CITIES} from '../home/cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cities = {
    kyoto: {
      name: 'kyoto',
      country: 'Japan',
      thumbnail: 'assets/images/thumbnails/kyoto.jpg',
      thumbnailAltText: 'A widing street in Kyoto Japan',
      image: 'https://www.travelcaffeine.com/wp-content/uploads/2020/03/hirano-shrine-cherry-blossom-hanami-sakura-season-kyoto-japan-torii-gate-sunburst.jpg',
      imageAltText: 'The blooming cherry blossoms in Kyoto Japan',
    },
    london: {
      name: 'London',
      country: 'United Kingdom',
      thumbnail: 'assets/images/thumbnails/london.jpg',
      thumbnailAltText: 'The Tower of London',
      image: 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/023/736/slideshow/57e04b71f317274083f7af6ee1d77c34/london-tour-big-ben-westminster-sunset.jpg',
      imageAltText: 'The London Tower',
    },
    rome: {
      name: 'Rome',
      country: 'Italy',
      thumbnail: 'https://pyxis.nymag.com/v1/imgs/165/73a/0a95f5efc8982a48aa6ecb46779a0b4299-rome-lede.rsquare.w1200.jpg',
      thumbnailAltText: 'The city of rome at sunset',
      image: 'https://www.history.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTU3ODc5MDgzMjA3MzcwNDYz/colosseum_hero.jpg',
      imageAltText: 'A birds-eye view of the coliseum.',
    },
    sanFransisco: {
      name: 'San Fransisco',
      country: 'United States of America',
      thumbnail: 'assets/images/thumbnails/ggb.jpg',
      thumbnailAltText: 'golden gate bridge',
      image: 'https://www.planetware.com/photos-large/USNY/usa-best-places-san-francisco.jpg',
      imageAltText: 'Picture of the Golden Gate Bridge ona sunny day.',
    },
    sidney: {
      name: 'Sidney',
      country: 'Australia',
      thumbnail: 'assets/images/thumbnails/sidney.jpg',
      thumbnailAltText: 'Sidney Opera House',
      image: 'https://ak-d.tripcdn.com/images/10060n000000e4c6nEB47.jpg',
      imageAltText: 'The Sidney Opera House',
    },
    singapore: {
      name: 'Singapore',
      country: 'Singapore',
      thumbnail: 'assets/images/thumbnails/singapore.jpg',
      thumbnailAltText: 'Garden at night',
      image: 'https://www.planetware.com/photos-large/SIN/singapore-gardens-by-the-bay.jpg',
      imageAltText: 'Picture of the Gardens by the Bay on a sunny day.',
    }
  };
  // tslint:disable-next-line:typedef
  getCity(name: string){
    if (name === 'Kyoto'){
      return this.cities.kyoto;
    }else if (name === 'London'){
      return this.cities.london;
    }else if (name === 'Rome'){
      return this.cities.rome;
    }else if (name === 'San Fransisco'){
      return this.cities.sanFransisco;
    }else if (name === 'Sidney'){
      return this.cities.sidney;
    }else if (name === 'Singapore'){
      return this.cities.singapore;
    }
  }
}
