import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Auctionrecord } from '../common/auctionrecord';
import { BidRecord } from '../common/bid-record';
import { AuctionService } from './auction.service';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {

  auctionRecords: Auctionrecord[] = [];
  bidRecords: BidRecord[] = [];
  totalInvested: Subject<number> = new Subject<number>();
  totalAuctions: Subject<number> = new Subject<number>();


  constructor(private auctionService:AuctionService) {}

  addAuctionRecord(auction: Auctionrecord) {
    let alredyExistsInRecords: boolean = false;

    for (let i = 0; i < this.auctionRecords.length; i++) {
      if (this.auctionRecords[i].id === auction.id) {
        alredyExistsInRecords = true;
        break;
      }
    }

    if (!alredyExistsInRecords) {
      this.auctionRecords.push(auction);
    }

    this.totalAuctions.next(this.auctionRecords.length);
  }

  addBidRecord(bid: BidRecord) {
    let alredyExistsInRecords: boolean = false;

    for (let i = 0; i < this.bidRecords.length; i++) {
      if (this.bidRecords[i].id === bid.id) {
        alredyExistsInRecords = true;
        break;
      }
    }

    if (!alredyExistsInRecords) {
      this.bidRecords.push(bid);
    }

    //total invested is the sum of all bids
    let totalInvested: number = 0;
    for (let i = 0; i < this.bidRecords.length; i++) {
      totalInvested += this.bidRecords[i].price;
    }

    this.totalInvested.next(totalInvested);

  }











}
