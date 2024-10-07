package com.example.demo.entities;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Long id;

    @Column(nullable = false, name = "name")
    public String name;

    @Column(nullable = false, name = "email")
    public String email;

    @Column(nullable = false, unique = true, name = "cpf")
    public String cpf;

    @Column(nullable = false, name = "birth_date")
    public Date birthDate;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    public List<Enrollment> enrollments;
}
