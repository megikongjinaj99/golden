import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auction } from '../common/auction';
import { HttpClient } from '@angular/common/http';
import { Category } from '../common/category';
import { Bid } from '../common/bid';
import { AuctionDto } from '../common/auction-dto';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private baseUrl = 'http://auctions.ddns.net:8081/api/auctions';
  private categoryUrl2 = 'http://auctions.ddns.net:8081/api/categories';
  private categoryUrl = 'http://auctions.ddns.net:8081/categories/all';
  private PostUrl = 'http://auctions.ddns.net:8081/auction';
  private searchUrl = "http://auctions.ddns.net:8081/auctions/search"

  constructor(private httpClient: HttpClient) {}

  getAuctionListPaginate(
    query?: string,
    categoryId?: number
  ): Observable<any> {

    return this.httpClient
    .post<any>(this.searchUrl,{"categoryId": categoryId, "query": query}).pipe(map((response) =>  response.data));
  }

  searchAuctions(theKeyword: string): Observable<Auction[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getAuctions(searchUrl);
  }

  getAuctionList(categoryId: number): Observable<Auction[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    return this.getAuctions(searchUrl);
  }

  getBidList(auctionId: number): Observable<Bid[]> {
    const searchUrl = `${this.baseUrl}/${auctionId}/bids`;
    return this.getBids(searchUrl);
  }

  getBids(searchUrl: string): Observable<Bid[]> {
    return this.httpClient
      .get<GetResponseBids>(searchUrl)
      .pipe(map((response) => response._embedded.bids));
  }

  getAuctionCategories(): Observable<Category[]> {
    return this.httpClient
      .get<any>(this.categoryUrl)
      .pipe(map((response) => response.data));
  }

  getAuctionCategories2(): Observable<Category[]> {
    return this.httpClient
      .get<GetResponseCategory>(this.categoryUrl2)
      .pipe(map((response) => response._embedded.categories));
  }

  private getAuctions(searchUrl: string): Observable<Auction[]> {
    return this.httpClient
      .get<GetResponseAuctions>(searchUrl)
      .pipe(map((response) => response._embedded.auctions));
  }

  getAuction(theAuctionId: number): Observable<Auction> {
    const url = `${this.baseUrl}/${theAuctionId}`;
    return this.httpClient.get<Auction>(url);
  }

  /*   addBid(auctionId: number, bid: Bid): Observable<Bid> {
    const url = `${this.PostUrl}/addBid/${auctionId}`
    return this.httpClient.post<Bid>(url, bid);
  } */

  addBid2(auctionId: number, bid: Bid): Observable<any> {
    const url = `${this.PostUrl}/addBid`;
    bid.auctionId = auctionId;
    return this.httpClient.post<any>(url, bid);
  }

  addAuction(auction: AuctionDto): Observable<any> {
    const url = `${this.PostUrl}/addAuction`;
    return this.httpClient.post<any>(url, auction);
  }

  //send a post request to close auction
  closeAuction(auctionId: number): Observable<any> {
    const url = `${this.PostUrl}/close`;
    return this.httpClient.post<any>(url, { id: auctionId });
  }

  getActiveAuctions() {
    const url = `http://auctions.ddns.net:8081/api/auctions/search/findByStatus?status=ACTIVE`;
    return this.httpClient
      .get<GetResponseAuctions>(url)
      .pipe(map((response: any) => response._embedded.auctions));
  }

  getFinishedAuctions() {
    const url = `http://auctions.ddns.net:8081/api/auctions/search/findByStatus?status=SOLD`;
    return this.httpClient
      .get<GetResponseAuctions>(url)
      .pipe(map((response: any) => response._embedded.auctions));
  }
}

interface GetResponseAuctions {
  _embedded: {
    auctions: Auction[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}

interface GetResponseCategory {
  _embedded: {
    categories: Category[];
  };
}
// get a response of bids
interface GetResponseBids {
  _embedded: {
    bids: Bid[];
  };
}
