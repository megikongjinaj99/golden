package com.goldenspace.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.CreationTimestamp;
import lombok.Data;

@Entity
@Table(name = "auction")
@Data
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_id")
    protected Long categoryId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false, updatable = false, insertable = false)
    private Category category;


    @Column(name = "name")
    private String name;

    @Column(name = "winner_email")
    private String winnerEmail;

    @Column(name = "description")
    private String description;

    @Column(name = "start_date")
    @CreationTimestamp
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "initial_price")
    private BigDecimal initialPrice;

    @Column(name = "current_price")
    private BigDecimal currentPrice;

    @Column(name = "sold_price")
    private BigDecimal soldPrice;

    @Lob
    @Column(name = "image_url", columnDefinition = "MEDIUMBLOB")
    private String imageUrl;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    // default value is active
    private Status status = Status.ACTIVE;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "auction")
    @JsonIgnore
    private List<Bid> bids;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public BigDecimal getInitialPrice() {
        return initialPrice;
    }

    public void setInitialPrice(BigDecimal initialPrice) {
        this.initialPrice = initialPrice;
    }

    public BigDecimal getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(BigDecimal currentPrice) {
        this.currentPrice = currentPrice;
    }

    public BigDecimal getSoldPrice() {
        return soldPrice;
    }

    public void setSoldPrice(BigDecimal soldPrice) {
        this.soldPrice = soldPrice;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public List<Bid> getBids() {
        return bids;
    }

    public void setBids(List<Bid> bids) {
        this.bids = bids;
    }

    public String getWinnerEmail() {
        return winnerEmail;
    }

    public void setWinnerEmail(String winnerEmail) {
        this.winnerEmail = winnerEmail;
    }

    
    public void addBid(Bid bid) {
        // if bid is not null and bid is not equal or lower than current price
        if (bid != null && bid.getPrice().compareTo(currentPrice) > 0) {
            currentPrice = bid.getPrice();
            bid.setAuction(this);
            bids.add(bid);
        }
    }

    public void setCategoryId(Long categoryId2) {
        this.categoryId = categoryId2;
    }

    // @Column(name = "city")
    // private City city;
    /*
     * 
     * 
     * @ManyToOne
     * 
     * @JoinColumn(ame = "user_id", nullable = false)
     * private User user;
     */

}
