import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/common/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  constructor(private newsService:NewsService,private route: ActivatedRoute,) { }

  news: News = new News();

  ngOnInit(): void {
    this.handleNewsDetails();

  }

  handleNewsDetails() {
    // get the "id" param string and convert string to a number using the "+" symbol (convert to number)
    const theNewsId: number = +this.route.snapshot.paramMap.get('id')!;
    this.newsService.getNewsDetails(theNewsId).subscribe((data) => {
      this.news = data;
    });
  }


}

