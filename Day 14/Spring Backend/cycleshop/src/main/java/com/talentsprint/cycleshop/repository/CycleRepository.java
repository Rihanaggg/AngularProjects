package com.talentsprint.cycleshop.repository;

import org.springframework.data.repository.CrudRepository;

import com.talentsprint.cycleshop.entity.CycleStock;

public interface CycleRepository extends CrudRepository<CycleStock, Long>{
    
}
