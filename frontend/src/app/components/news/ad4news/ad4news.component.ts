import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/common/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-ad4news',
  templateUrl: './ad4news.component.html',
  styleUrls: ['./ad4news.component.css']
})
export class Ad4newsComponent implements OnInit {

  newsList: News[] = [];

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.getNewsList();
  }


  getNewsList(){
    this.newsService.getNewsList().subscribe(
      data => {
        this.newsList = data;
      }
    );
  }

}
