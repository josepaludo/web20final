import { useContext } from "react"
import { CoursesContext } from "../contexts/CoursesContext"
import { courseApi } from "../api/courseApi"
import { Course } from "../types/Course"


export const useCourses = () => {

    const { courses, currentCourse, editCourse, goToCoursesList, setCourses } = useContext(CoursesContext)

    const loadCourses = (callback: (courses: Array<Course>) => void) => {
        courseApi.get(callback)
    }

    const deleteCourse = (id: number) => {
        courseApi.delete(id, () => {
            setCourses!(courses => [
                ...courses.filter(course => course.id !== id)
            ])
        })
    }

    const createCourse = (course: Omit<Course, "id">) => {
        courseApi.create(course, (newcourse) => {
            setCourses!(curr => [ ...curr, newcourse ])
        })
    }

    const _editCourse = (course: Course) => {

        courseApi.update(course, () => {
            setCourses!(courses => [
                ...courses.filter(_course => _course.id !== course.id),
                course
            ])
        // @ts-expect-error dfsdfs
        }, (err) => {
            console.log(err)
        })
    }

    const goToEditCoursePage = (course: Course) => {
        editCourse!(course)
    }

    return {
        loadCourses,
        createCourse,
        deleteCourse,
        editCourse: _editCourse,
        goToEditCoursePage,
        courses,
        course: currentCourse,
        goToCoursesList
    }
}