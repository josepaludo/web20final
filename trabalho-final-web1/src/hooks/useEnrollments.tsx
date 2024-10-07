import { useContext } from "react"
import { Enrollment } from "../types/Enrollment"
import { EnrollmentsContext } from "../contexts/EnrollmentsContext"
import { enrollmentApi } from "../api/enrollmentApi"


export const useEnrollments = () => {

    const {
        setEnrollments, enrollments, editEnrollment, currentEnrollment,
        goToEnrollmentsList, courses, students
    } = useContext(EnrollmentsContext)

    const loadEnrollments = (callback: (enrollments: Array<Enrollment>) => void) => {
        enrollmentApi.get(callback)
    }

    const deleteEnrollment = (id: number) => {
        enrollmentApi.delete(id, () => {
            setEnrollments!(enrollments => [
                ...enrollments.filter(enrollment => enrollment.id !== id)
            ])
        })
    }

    const createEnrollment = (enrollment: Omit<Enrollment, "id">) => {
        enrollmentApi.create(enrollment, (newEnrollment) => {
            setEnrollments!(curr => [ ...curr, newEnrollment ])
        })
    }

    const _editEnrollment = (enrollment: Enrollment) => {

        enrollmentApi.update(enrollment, () => {
            setEnrollments!(enrollments => [
                ...enrollments.filter(_enrollment => _enrollment.id !== enrollment.id),
                enrollment
            ])
        // @ts-expect-error dfsdfs
        }, (err) => {
            console.log(err)
        })
    }

    const goToEditEnrollmentPage = (enrollment: Enrollment) => {
        editEnrollment!(enrollment)
    }

    return {
        loadEnrollments,
        createEnrollment,
        deleteEnrollment,
        editEnrollment: _editEnrollment,
        goToEditEnrollmentPage,
        enrollments,
        enrollment: currentEnrollment,
        goToEnrollmentsList,
        students,
        courses
    }
}
