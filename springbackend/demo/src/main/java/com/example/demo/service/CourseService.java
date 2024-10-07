package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Course;
import com.example.demo.repository.CourseRepository;

@Service
public class CourseService {
    
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getCourses() {
        return this.courseRepository.findAll();
    }

    public Optional<Course> getCourse(Long id) {
        return this.courseRepository.findById(id);
    }

    public void deleteCourse(Long id) {
        this.courseRepository.deleteById(id);
    }

    public Course updateCourse(Long id, Course course) {
        course.id = id;
        return this.courseRepository.save(course);
    }

    public Course createCourse(Course course) {
        return this.courseRepository.save(course);
    }
}
