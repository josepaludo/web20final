import { Course } from "../types/Course"
import { Enrollment } from "../types/Enrollment"
import { Student } from "../types/Student"


export type Urls = "enrollment"|"course"|"student"

export type Entities = {
    "enrollment": Enrollment,
    "course": Course,
    "student": Student
}

export const ENROLLMENT_URL = "enrollment"
export const COURSE_URL = "course"
export const STUDENT_URL = "student"