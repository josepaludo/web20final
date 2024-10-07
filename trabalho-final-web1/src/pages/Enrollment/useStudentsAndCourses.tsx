import { useEffect, useState } from "react"
import { Course } from "../../types/Course"
import { Student } from "../../types/Student"
import { studentApi } from "../../api/studentsApi"
import { courseApi } from "../../api/courseApi"


export default function useStudentsAndCourses() {

    const [ students, setStudents ] = useState<Array<Student>>([])
    const [ courses, setCourses ] = useState<Array<Course>>([])

    useEffect(() => {
        studentApi.get(setStudents)
        courseApi.get(setCourses)
    }, [])

    return { students, courses }
}