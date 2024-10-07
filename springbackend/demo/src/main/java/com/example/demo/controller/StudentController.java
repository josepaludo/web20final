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

import com.example.demo.entities.Student;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    
    @GetMapping
    public List<Student> getStudents() {
        System.out.println("[GET STUDENTS]");

        return this.studentService.getStudents();
    }

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        System.out.println("[CREATE STUDENT]");
        System.out.println(student.toString());

        return this.studentService.createStudent(student);
    }

    @GetMapping("/{id}")
    public Optional<Student> getStudent(@PathVariable Long id) {
        System.out.println("[GET STUDENT]");
        System.out.println(id.toString());

        return this.studentService.getStudent(id);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        System.out.println("[DELETE STUDENT]");
        System.out.println(id.toString());

        this.studentService.deleteStudent(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
        System.out.println("[UPDATE STUDENT]");
        System.out.println(student.toString());
        System.out.println(id.toString());

        return this.studentService.updateStudent(id, student);
    }
}
