package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "enrollment")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long id;

    @Column(name = "grade", nullable = true)
    public Integer grade;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    public Course course;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    public Student student;
}
