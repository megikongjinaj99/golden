package com.goldenspace.dao;

import com.goldenspace.entity.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BidRepository extends JpaRepository<Bid, Long> {

}
