package com.goldenspace.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import com.goldenspace.dao.AuctionRepository;
import com.goldenspace.dao.BidRepository;
import com.goldenspace.dao.CategoryRepository;
import com.goldenspace.dto.AuctionCreate;
import com.goldenspace.dto.AuctionFilter;
import com.goldenspace.dto.BidDto;
import com.goldenspace.dto.ServiceResponse;
import com.goldenspace.entity.Auction;
import com.goldenspace.entity.Bid;
import com.goldenspace.entity.Category;
import com.goldenspace.entity.Mail;
import com.goldenspace.entity.Status;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@Transactional
@EnableScheduling
public class AuctionService {

    AuctionRepository auctionRepository;
    BidRepository bidRepository;
    CategoryRepository categoryRepository;
    MailService mailService;
    // constructor
    public AuctionService(AuctionRepository auctionRepository, BidRepository bidRepository,
            CategoryRepository categoryRepository,MailService mailService) {
        this.auctionRepository = auctionRepository;
        this.bidRepository = bidRepository;
        this.categoryRepository = categoryRepository;
        this.mailService = mailService;

    }

    /*
     * public Auction addBid(Long id, BidDto bid) {
     * Auction auction = auctionRepository.findById(id).get();
     * Bid newBid = new Bid();
     * newBid.setPrice(bid.getPrice());
     * newBid.setAuction(auction);
     * bidRepository.save(newBid);
     * auction.addBid(newBid);
     * return auctionRepository.save(auction);
     * }
     */

    public ServiceResponse<String> closeAuction(Long id) {
        String result = "ok";
        Auction auction = auctionRepository.findById(id).get();
        // if auction is not null and auction is not sold and auction is not expired
        if (auction != null && auction.getStatus() != Status.SOLD && auction.getStatus() != Status.UNSOLD) {
            // if auction is active
            if (auction.getStatus() == Status.ACTIVE) {
                // if auction has no bids and date is
                if (auction.getBids().size() == 0) {
                    // set auction status to expired
                    auction.setStatus(Status.UNSOLD);
                    result = "Auction has no bids and is expired";
                }
                // if auction has bids
                else {
                    // set auction sold price to highest bid price
                    auction.setSoldPrice(auction.getBids().get(auction.getBids().size() - 1).getPrice());
                    System.out.println("Auction is Sold with price: " + auction.getSoldPrice()+" and winner email: "+auction.getWinnerEmail());
                    //send email
                    String winnerEmail = auction.getWinnerEmail();
		Mail mail = new Mail();
        mail.setMailFrom("goldenspace.auctions@gmail.com");
        mail.setMailTo(winnerEmail);
        mail.setMailSubject("You won the" + auction.getName());
        mail.setMailContent("You won the" + auction.getName() + "with price: " + auction.getSoldPrice()
        + "You have to pay the price or face the consequences");
        mailService.sendEmail(mail);
                    // set auction status to sold
                    auction.setStatus(Status.SOLD);
                }
            }
        }
        // if auction is null
        else if (auction == null) {
            result = "Auction does not exist";
        }

        return result.equals("ok") ? ServiceResponse.success("Auction status changed") : ServiceResponse.error(result);

    }

    public ServiceResponse<String> addBid2(BidDto bid) {
        String result = "ok";
        Auction auction = auctionRepository.findById(bid.getAuctionId()).get();
        // if bid price is higher than auction current price and auction is active add
        // bid
        if (bid.getPrice().compareTo(auction.getCurrentPrice()) > 0 && auction.getStatus() == Status.ACTIVE) {
            Bid newBid = new Bid();
            newBid.setPrice(bid.getPrice());
            newBid.setAuction(auction);
            bidRepository.save(newBid);
            auction.setWinnerEmail(bid.getEmail());
            auction.addBid(newBid);
            auctionRepository.save(auction);
        } else {
            result = "Bid price is lower than current price or auction is not active";
        }
        return result.equals("ok") ? ServiceResponse.success("Bid added") : ServiceResponse.error(result);
    }

    // add auction
    public ServiceResponse<String> addAuction(AuctionCreate auctionCreate) {
        String result = "ok";
        Auction auction = new Auction();
        Category category = categoryRepository.findById(auctionCreate.getCategoryId()).get();

        // if category is not null
        if (category != null) {
            auction.setName(auctionCreate.getName());
            auction.setDescription(auctionCreate.getDescription());
            auction.setImageUrl(auctionCreate.getImageUrl());
            auction.setStartDate(auctionCreate.getStartDate());
            auction.setEndDate(auctionCreate.getEndDate());
            auction.setInitialPrice(auctionCreate.getInitialPrice());
            auction.setCurrentPrice(auctionCreate.getInitialPrice());
            auction.setCategoryId(auctionCreate.getCategoryId());
            auction.setStatus(Status.ACTIVE);
            auctionRepository.save(auction);
        } else {
            result = "Category does not exist";
        }
        return result.equals("ok") ? ServiceResponse.success("Auction added") : ServiceResponse.error(result);
    }

    public ServiceResponse<List<Auction>> filter(AuctionFilter filter) {
        return ServiceResponse.success(auctionRepository.filter(filter.getQuery(), filter.getCategoryId()));
    }

    // scheduled run every 10 min
    @Scheduled(fixedRate = 100000)
    public void updateAuction() {
        Date currentDate = new Date();
        System.out.println("Date 1: " + currentDate);
        // check if auction end date is in the past and auction is active and auction
        // has bids
        // if so set auction status to sold else set auction status to unsold
        for (Auction auction : auctionRepository.findAll()) {
            // if auction has bids and end date is in the past and auction is active set
            // auction status to sold and sold price to highest bid price
            if (auction.getStatus() == Status.ACTIVE && auction.getEndDate().before(currentDate)) {
                if (auction.getBids().size() > 0) {
                    auction.setWinnerEmail(auction.getBids().get(auction.getBids().size() - 1).getEmail());
                    auction.setStatus(Status.SOLD);
                    auction.setSoldPrice(auction.getBids().get(auction.getBids().size() - 1).getPrice());
                    System.out.println("Auction is Sold with price: " + auction.getSoldPrice()+" and winner email: "+auction.getWinnerEmail());
                    //send email
                    String winnerEmail = auction.getWinnerEmail();
		Mail mail = new Mail();
        mail.setMailFrom("goldenspace.auctions@gmail.com");
        mail.setMailTo(winnerEmail);
        mail.setMailSubject("You won the" + auction.getName());
        mail.setMailContent("You won the" + auction.getName() + "with price: " + auction.getSoldPrice()
        + "You have to pay the price or face the consequences");
        mailService.sendEmail(mail);

                }
            }
            // if auction has no bids and end date is in the past and auction is active set
            // auction status to unsold
            else if (auction.getStatus() == Status.ACTIVE && auction.getEndDate().before(currentDate)
                    && auction.getBids().size() == 0) {
                auction.setStatus(Status.UNSOLD);
                System.out.println("Auction is Unsold");
            }
        }
    }
}