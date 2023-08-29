import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/common/auction';
import { Auctionrecord } from 'src/app/common/auctionrecord';
import { AuctionService } from 'src/app/services/auction.service';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-activeauctions',
  templateUrl: './activeauctions.component.html',
  styleUrls: ['./activeauctions.component.css']
})
export class ActiveauctionsComponent implements OnInit {
  activeAuctions: Auction[] = [];
  constructor(private auctionService: AuctionService, private recordService: RecordsService) { }

  ngOnInit(): void {
    this.getActiveAuctions();
  }

  getActiveAuctions() {
    this.auctionService.getActiveAuctions().subscribe((data) => {
      this.activeAuctions = data;
    });
  }
  takePart(auction: Auction) {
    const auctionRecord = new Auctionrecord(auction);
    this.recordService.addAuctionRecord(auctionRecord);
  }
}
