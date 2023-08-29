import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auction } from 'src/app/common/auction';
import { Bid } from 'src/app/common/bid';
import { AuctionService } from 'src/app/services/auction.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BidRecord } from 'src/app/common/bid-record';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css'],
})
export class AuctionDetailsComponent implements OnInit {
  auction: Auction = new Auction;
  //list of bids
  bids: Bid[] = [];
  bid: Bid = new Bid();
  closeResult!: string;

  constructor(
    private auctionService: AuctionService,
    private recordService: RecordsService,
    private route: ActivatedRoute,
    private modalService: NgbModal


  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleAuctionDetails();
    });
    this.route.paramMap.subscribe(() => {
      this.getBids();
    }
    );

  }

  handleAuctionDetails() {
    // get the "id" param string and convert string to a number using the "+" symbol (convert to number)
    const theAuctionId: number = +this.route.snapshot.paramMap.get('id')!;
    this.auctionService.getAuction(theAuctionId).subscribe((data) => {
      this.auction = data;
    });
  }

  //list of bids for the auction
  getBids() {
    const theAuctionId: number = +this.route.snapshot.paramMap.get('id')!;
    this.bids = [];
    this.auctionService.getBidList(theAuctionId).subscribe((data) => {
      this.bids = data;
    });
  }
/*
  //add bid with URL parameters
  addBid(bid: Bid) {
    const theAuctionId: number = +this.route.snapshot.paramMap.get('id')!;
    const bidRecord = new BidRecord(bid);

    // Update the total invest
    this.recordService.addBidRecord(bidRecord);

    // Save to database
    this.auctionService.addBid(theAuctionId, bid).subscribe((data) => {
      this.bid = data;
      this.getBids();
    });
  } */

  addBid2(bid: Bid) {
    const theAuctionId: number = +this.route.snapshot.paramMap.get('id')!;
    const bidRecord = new BidRecord(bid);

    // Update the total invest
    this.recordService.addBidRecord(bidRecord);

    // Save to database
    this.auctionService.addBid2(theAuctionId, bid).subscribe({
      next: (data) => {
          if (data.success) {
            alert('Bid added successfully.');

          }
          else {
            alert(data.messages.join('\n'));
          }
          this.getBids();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  //close auction
  closeAuction() {
    const theAuctionId: number = +this.route.snapshot.paramMap.get('id')!;
    this.auctionService.closeAuction(theAuctionId).subscribe({
      next: (data) => {
          if (data.success) {
            alert('Auction closed successfully.');

          }
          else {
            alert(data.messages.join('\n'));
          }
          this.handleAuctionDetails();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  //open modal
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any) {
    throw new Error('Bid is lower than current price.');
  }

}
