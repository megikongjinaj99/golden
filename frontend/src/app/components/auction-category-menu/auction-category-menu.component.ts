import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-auction-category-menu',
  templateUrl: './auction-category-menu.component.html',
  styleUrls: ['./auction-category-menu.component.css'],
})
export class AuctionCategoryMenuComponent implements OnInit {
  auctionCategories!: Category[];
  auctionCategories2!: Category[];

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.listAuctionCategories();
  }

  listAuctionCategories() {
    this.auctionService.getAuctionCategories().subscribe((data) => {
      console.log('Auction categories=' + JSON.stringify(data));
      this.auctionCategories = data;
    });
  }

  listAuctionCategories2() {
    this.auctionService.getAuctionCategories2().subscribe((data) => {
      console.log('Auction categories=' + JSON.stringify(data));
      this.auctionCategories = data;
    });
  }


}
