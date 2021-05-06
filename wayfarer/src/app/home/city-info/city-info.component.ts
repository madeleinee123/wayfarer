import { Component, OnInit, Input } from '@angular/core';
import {PostComponent} from '../post/post.component';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {
  @Input('name') name: string;
  @Input('country') country: string;
  @Input('imageUrl') imageUrl: string;
  @Input('altText') altText: string;
  posts: PostComponent[];
  constructor() { }

  ngOnInit(): void {
  }
  addToPosts(post: PostComponent): void{
    this.posts.push(post);
  }
}
