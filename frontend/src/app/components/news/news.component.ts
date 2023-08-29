import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { News } from 'src/app/common/news';
import { NewsService } from 'src/app/services/news.service';
import { AddNewsComponent } from './add-news/add-news.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
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
