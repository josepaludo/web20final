import { createContext, Dispatch, SetStateAction } from "react";
import { Enrollment } from "../types/Enrollment";
import { Course } from "../types/Course";
import { Student } from "../types/Student";


export const EnrollmentsContext = createContext<{
    enrollments: Array<Enrollment>
    setEnrollments?: Dispatch<SetStateAction<Enrollment[]>>
    editEnrollment?: (student: Enrollment) => void
    currentEnrollment?: Enrollment
    goToEnrollmentsList?: () => void
    courses: Course[],
    students: Student[]
}>({ enrollments: [], courses: [], students: [] })
