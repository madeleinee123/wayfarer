import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('name') name: string;
  @Input('content') content: string;
  @Input('imageUrl') imageUrl: string;
  @Input('date') date: string;
  constructor() { }

  ngOnInit(): void {
  }

}
