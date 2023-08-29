import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { News } from '../common/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private baseUrl = 'http://auctions.ddns.net:8081/api/news';
  private postUrl = 'http://auctions.ddns.net:8081/news/addNews';

  constructor(private httpClient: HttpClient) {}

  getNewsList(): Observable<News[]> {
    return this.httpClient.get<GetResponseNews>(this.baseUrl).pipe(
      map((response:any) => response._embedded.news),
    );
  }


  getNewsDetails(id: number) {
    const searchUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.get<News>(searchUrl);
  }


  addNews(news: News): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, news);
  }

}

interface GetResponseNews {
  _embedded: {
    news: News[];
  };
}
