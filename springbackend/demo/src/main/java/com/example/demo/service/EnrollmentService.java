package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Enrollment;
import com.example.demo.repository.EnrollmentRepository;

@Service
public class EnrollmentService {
    
    private final EnrollmentRepository enrollmentRepository;

    @Autowired
    public EnrollmentService(EnrollmentRepository enrollmentRepository) {
        this. enrollmentRepository = enrollmentRepository;
    }

    public List<Enrollment> getEnrollments() {
        return this.enrollmentRepository.findAll();
    }

    public Optional<Enrollment> getEnrollment(Long id) {
        return this.enrollmentRepository.findById(id);
    }

    public void deleteEnrollment(Long id) {
        this.enrollmentRepository.deleteById(id);
    }

    public Enrollment updateEnrollment(Long id, Enrollment enrollment) {
        enrollment.id = id;
        return this.enrollmentRepository.save(enrollment);
    }

    public Enrollment creaEnrollment(Enrollment enrollment) {
        return this.enrollmentRepository.save(enrollment);
    }
}
