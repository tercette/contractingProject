import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList!: Array<number>;
  today: Date =  new Date()

  constructor(){}


  ngOnInit(): void {
    const list = new Array<number>();
    for (let index = 0; index <1; index++) {
      list.push(index);
    }
    this.newsList = list
  }
}


