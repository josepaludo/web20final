package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    
}
