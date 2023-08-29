package com.goldenspace.entity;

import javax.persistence.*;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    /*
     * @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
     * private List<Bid> bids;
     * 
     * @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
     * private List<Auction> auctions;
     */

}
