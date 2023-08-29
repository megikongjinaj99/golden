package com.goldenspace.dto;

import java.math.BigDecimal;
import java.util.Date;

public class AuctionCreate {

    protected String name;
    protected String description;
    protected BigDecimal initialPrice;
    protected Date startDate;
    protected Date endDate;
    protected String imageUrl;
    protected Long categoryId;
    
    public String getName() {
        return name;
    }
    public String getDescription() {
        return description;
    }
    public BigDecimal getInitialPrice() {
        return initialPrice;
    }
    public Date getStartDate() {
        return startDate;
    }
    public Date getEndDate() {
        return endDate;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public Long getCategoryId() {
        return categoryId;
    }

    


}
