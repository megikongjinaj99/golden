export class AuctionDto {
  name!: string;
  winnerEmail!: string;
  description!: string;
  initialPrice!: number;
  startDate!: Date;
  endDate!: Date;
  imageUrl!: string;
  categoryId!: number;
}
