package com.talentsprint.cycleshop.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.talentsprint.cycleshop.entity.CycleStock;
import com.talentsprint.cycleshop.entity.User;
import com.talentsprint.cycleshop.repository.CycleRepository;
import com.talentsprint.cycleshop.repository.UserRepository;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class CycleRestController {
   

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CycleRepository cycleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/list")
    public List<CycleStock> getAllCycleStocks() {
        return (List<CycleStock>) cycleRepository.findAll();
    }

    @PostMapping("/borrow/{id}")
    public ResponseEntity<String> borrowCycle(@PathVariable long id, @RequestBody CycleStock cycleBody) {
        Optional<CycleStock> optionalCycle = cycleRepository.findById(id);
        System.out.println(optionalCycle);
        if (optionalCycle.isPresent()) {
            CycleStock cycle = optionalCycle.get();
            int currentAvailableCycles = cycle.getAvailableCycles();
            if (currentAvailableCycles > 0) {
                cycle.setAvailableCycles(currentAvailableCycles - 1);
                cycleRepository.save(cycle);
                return ResponseEntity.ok("Cycle borrowed successfully");
            } else {
                return ResponseEntity.badRequest().body("No available cycles to borrow");
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/return/{id}")
    public ResponseEntity<String> returnCycle(@PathVariable long id) {
        Optional<CycleStock> optionalCycle = cycleRepository.findById(id);
        if (optionalCycle.isPresent()) {
            CycleStock cycle = optionalCycle.get();
            int currentAvailableCycles = cycle.getAvailableCycles();
            cycle.setAvailableCycles(currentAvailableCycles + 1);
            cycleRepository.save(cycle);

            return ResponseEntity.ok("Cycle returned successfully");
        } else {

            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/addCycle")
    public ResponseEntity<?> addCycle(@RequestBody CycleStock cycle) {
        System.out.println(cycle);
    try {
        if (cycle == null) {
            return ResponseEntity.badRequest().body("Cycle information is missing");
        }
       cycleRepository.save(cycle);
       List<CycleStock> allcycles= (List<CycleStock>) cycleRepository.findAll();

        return ResponseEntity.ok(allcycles);
        
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cycle addition failed: " + e.getMessage());
    }
  }


    @GetMapping("/registration")
    public String registrationForm(Model model) {
        return "userRegistration";
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            if (userRepository.existsByName(user.getName())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return ResponseEntity.ok("User registered successfully");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
        }
    }

    @GetMapping("/login")
    public String LoginForm(Model model) {
        return "userLogin";
    }

    @PostMapping("/login")
    public String LoginonSubmit(@RequestParam String username, @RequestParam String password, Model model) {

        Optional<User> user = userRepository.findByName(username);
        if (user != null && userMatchesPassword(user.get(), password)) {
            return "redirect:/restock";
        } else {
            model.addAttribute("error", "Invalid Crudentials");
            return "userLogin";
        }
    }

    private boolean userMatchesPassword(User user, String password) {
        return user.getPassword().equals(password);
    }
}