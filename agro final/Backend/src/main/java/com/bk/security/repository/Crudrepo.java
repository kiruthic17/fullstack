package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Crudmodel;
@Repository
public interface Crudrepo extends JpaRepository<Crudmodel,Long> {

}