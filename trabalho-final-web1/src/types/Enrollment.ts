import { Course } from "./Course"
import { Student } from "./Student"

export type Enrollment = {
    id: number,
    grade?: number

    course: Course,
    student: Student
}
