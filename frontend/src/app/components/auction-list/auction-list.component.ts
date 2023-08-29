import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/common/auction';
import { Auctionrecord } from 'src/app/common/auctionrecord';
import { BidRecord } from 'src/app/common/bid-record';
import { AuctionService } from 'src/app/services/auction.service';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css'],
})
export class AuctionListComponent implements OnInit {
  auctions: Auction[] = [];
  activeAuctions: Auction[] = [];
  currentCategoryId!: number;
  previousCategoryId: number = 1;
  currentCategoryName: any;
  searchMode!: boolean;
  //pagination properites
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(
    private auctionService: AuctionService,
    private route: ActivatedRoute,
    private recordService: RecordsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listAuctions();
    });
    this.getActiveAuctions();
    console.log(this.activeAuctions)
  }

  listAuctions() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchAuctions();
    } else {
      this.handleListAuctions();
    }
  }

  handleSearchAuctions() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.auctionService
      .searchAuctions(theKeyword)
      .subscribe((data) => (this.auctions = data));
  }

  handleListAuctions() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    } else {
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Default';
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(this.currentCategoryId);
    // now get the products for the given category id
    // this.auctionService
    //   .getAuctionListPaginate(
    //     this.thePageNumber - 1,
    //     this.thePageSize,
    //     this.currentCategoryId
    //   )
    //   .subscribe(this.processResult());
  }

  processResult() {
    return (data: any) => {
      this.auctions = data._embedded.auctions;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  takePart(auction: Auction) {
    const auctionRecord = new Auctionrecord(auction);
    this.recordService.addAuctionRecord(auctionRecord);
  }

  getActiveAuctions() {
    this.auctionService.getActiveAuctions().subscribe((data) => {
      this.activeAuctions = data;
    });
  }

}
