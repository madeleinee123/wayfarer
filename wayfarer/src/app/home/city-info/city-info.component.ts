import {Component, Inject, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';
import {CityService} from '../../services/city.service'
import {CITIES} from '../cities';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {
  name: string;
  country: string;
  image: string;
  altText: string;
  posts: PostComponent[];
  constructor(private service: CityService, @Inject('name')name: string) {
    this.name = name;
    this.posts = this.createPostList(CITIES[name]);
  }
  createPostList(posts: any[]): PostComponent[]{
    // const postList = [];
    // // tslint:disable-next-line:prefer-for-of
    // for (let i = 0; i < posts.length; i++){
    //   const cur = posts[i];
    //   //const post = new PostComponent(cur.title, cur.content, cur.imageUrl, cur.date, cur.city);
    //   //postList.push(post);
    // }
    // return postList;
    return [];
  }
  ngOnInit(): void {
    this.country = this.service.getCity(this.name).country;
    this.image = this.service.getCity(this.name).image;
    this.altText = this.service.getCity(this.name).imageAltText;
  }
}
