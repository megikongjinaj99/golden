import { Auction } from './auction';

export class Auctionrecord {
  id!: number;
  name!: string;
  imageUrl!: string;

  constructor(auction: Auction) {
    this.id = auction.id;
    this.name = auction.name;
    this.imageUrl = auction.imageUrl;
  }

}
