package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Student;
import com.example.demo.repository.StudentRepository;


@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        return this.studentRepository.findAll();
    }

    public Optional<Student> getStudent(Long id) {
        return this.studentRepository.findById(id);
    }

    public void deleteStudent(Long id) {
        this.studentRepository.deleteById(id);
    }

    public Student updateStudent(Long id, Student student) {
        student.id = id;
        return this.studentRepository.save(student);
    }

    public Student createStudent(Student student) {
        return this.studentRepository.save(student);
    }
}
