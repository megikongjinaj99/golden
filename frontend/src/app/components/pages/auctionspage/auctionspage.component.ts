import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/common/auction';
import { Auctionrecord } from 'src/app/common/auctionrecord';
import { Category } from 'src/app/common/category';
import { AuctionService } from 'src/app/services/auction.service';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-auctionspage',
  templateUrl: './auctionspage.component.html',
  styleUrls: ['./auctionspage.component.css']
})
export class AuctionspageComponent implements OnInit {
  auctions: Auction[] = [];
  categories!: Category[];
  categoryId?: number;
  query?: string;
  loader: boolean = false;

  constructor(private auctionService: AuctionService,
    private route: ActivatedRoute,
    private recordService: RecordsService) {

     }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query') || undefined;
    this.route.paramMap.subscribe(() => {
      this.listAuctionCategories();
      this.filter(null);
    });
  }

  filter(category: any) {
    this.categoryId = category ? category!.id : null;
    this.loader = true;
    this.auctions = [];
    this.auctionService
    .getAuctionListPaginate(this.query, this.categoryId)
    .subscribe((result) => {this.auctions = result; this.loader = false});
  }


  handleSearchAuctions() {
    const theKeyword: string = this.route.snapshot.paramMap.get('query')!;
    this.auctionService
      .searchAuctions(theKeyword)
      .subscribe((data) => (this.auctions = data));
  }

  handleListAuctions() {
    // const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    // if (hasCategoryId) {
    //   this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    //   this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    // } else {
    //   this.currentCategoryId = 1;
    //   this.currentCategoryName = 'Default';
    // }

    // if (this.previousCategoryId != this.currentCategoryId) {
    //   this.thePageNumber = 1;
    // }

    // this.previousCategoryId = this.currentCategoryId;

    // console.log(this.currentCategoryId);
    // // now get the products for the given category id
    // this.auctionService
    //   .getAuctionListPaginate(
    //     this.thePageNumber - 1,
    //     this.thePageSize,
    //     this.currentCategoryId
    //   )
    //   .subscribe(this.processResult());
  }
  processResult() {
    // return (data: any) => {
    //   this.auctions = data._embedded.auctions;
    //   this.thePageNumber = data.page.number + 1;
    //   this.thePageSize = data.page.size;
    //   this.theTotalElements = data.page.totalElements;
    // };
  }
  takePart(auction: Auction) {
    const auctionRecord = new Auctionrecord(auction);
    this.recordService.addAuctionRecord(auctionRecord);
  }

  listAuctionCategories() {
    this.auctionService.getAuctionCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
