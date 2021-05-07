import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  city: string;
  constructor() { }

  ngOnInit(): void {
  }

}
