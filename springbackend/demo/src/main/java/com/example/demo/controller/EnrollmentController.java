package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Enrollment;
import com.example.demo.service.EnrollmentService;


@RestController
@RequestMapping("/enrollment")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    @Autowired
    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    
    @GetMapping
    public List<Enrollment> getEnrollments() {
        System.out.println("[GET ENROLLMENTS]");

        return this.enrollmentService.getEnrollments();
    }

    @PostMapping
    public Enrollment createEnrollment(@RequestBody Enrollment enrollment) {
        System.out.println("[CREATE ENROLLMENT]");
        System.out.println(enrollment.toString());

        return this.enrollmentService.creaEnrollment(enrollment);
    }

    @DeleteMapping("/{id}")
    public void deleteEnrollment(@PathVariable Long id) {
        System.out.println("[DELETE ENROLLMENT]");
        System.out.println(id.toString());

        this.enrollmentService.deleteEnrollment(id);
    }

    @GetMapping("/{id}")
    public Optional<Enrollment> getEnrollment(@PathVariable Long id) {
        System.out.println("[GET ENROLLMENT]");
        System.out.println(id.toString());

        return this.enrollmentService.getEnrollment(id);
    }

    @PutMapping("/{id}")
    public Enrollment updateEnrollment(@PathVariable Long id, @RequestBody Enrollment enrollment) {
        System.out.println("[UPDATE ENROLLMENT]");
        System.out.println(id.toString());
        System.out.println(enrollment.toString());

        return this.enrollmentService.updateEnrollment(id, enrollment);
    }
}
