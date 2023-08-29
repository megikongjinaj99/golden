import { Component, OnInit } from '@angular/core';
import { Auction } from 'src/app/common/auction';
import { AuctionService } from 'src/app/services/auction.service';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-finishedauctions',
  templateUrl: './finishedauctions.component.html',
  styleUrls: ['./finishedauctions.component.css']
})
export class FinishedauctionsComponent implements OnInit {
  finishedAuctions: Auction[] = [];

  constructor(private auctionService: AuctionService, private recordService: RecordsService) { }


  ngOnInit(): void {
    this.getFinishedAuctions();
  }
  getFinishedAuctions() {
    this.auctionService.getFinishedAuctions().subscribe((data) => {
      this.finishedAuctions = data;
    });
  }

}
