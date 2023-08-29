import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-bidstatus',
  templateUrl: './bidstatus.component.html',
  styleUrls: ['./bidstatus.component.css']
})
export class BidstatusComponent implements OnInit {

  totalAuctions: number = 0;
  totalInvested: number = 0.00;

  constructor(private recordsService: RecordsService) { }

  ngOnInit(): void {
    this.updateBidStatus();
  }

  updateBidStatus() {
    this.recordsService.totalAuctions.subscribe((data) => (this.totalAuctions = data));
    this.recordsService.totalInvested.subscribe((data) => (this.totalInvested = data));
  }





}
