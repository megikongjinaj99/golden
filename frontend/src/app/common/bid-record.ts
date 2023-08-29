import { Bid } from "./bid";

export class BidRecord {
  id!: number;
  price!: number;


  constructor(bid: Bid) {
    this.id = bid.id;
    this.price = bid.price;
  }


}
