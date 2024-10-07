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

import com.example.demo.entities.Course;
import com.example.demo.service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }
    
    @GetMapping
    public List<Course> getCourses() {
        System.out.println("[GET COURSES]");

        return this.courseService.getCourses();
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        System.out.println("[CREATE COURSE]");
        System.out.println(course.toString());

        return this.courseService.createCourse(course);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        System.out.println("[DELETE COURSE]");
        System.out.println(id.toString());

        this.courseService.deleteCourse(id);
    }

    @GetMapping("/{id}")
    public Optional<Course> getCourse(@PathVariable Long id) {
        System.out.println("[GET COURSE]");
        System.out.println(id.toString());

        return this.courseService.getCourse(id);
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course course) {
        System.out.println("[UPDATE COURSE]");
        System.out.println(id.toString());
        System.out.println(course.toString());

        return this.courseService.updateCourse(id, course);
    }
}
