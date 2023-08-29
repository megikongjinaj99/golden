package com.goldenspace.dto;
public class AuctionFilter {
    protected String query;
    protected Long categoryId;

    //getters
    public String getQuery() {
        return query;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    //setters

    public void setQuery(String query) {
        this.query = query;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }


}
