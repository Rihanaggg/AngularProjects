package com.prodapt.learningspring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prodapt.learningspring.entity.User;
import com.prodapt.learningspring.repository.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

      // Find a user by name

      public Optional<User> findUserByName(String username) {

        return userRepository.findByName(username);

    }
    
}
