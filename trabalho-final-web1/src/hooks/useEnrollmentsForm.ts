import { FormEventHandler, useState } from "react"
import { useEnrollments } from "./useEnrollments"
import { Enrollment } from "../types/Enrollment"


type Errors = {
    courseId?: string
    studentId?: string
    grade?: string
}

type Props = {
    type: "create",
    enrollment?: undefined,
} | {
    type: "edit",
    enrollment: Enrollment,
}

export const useEnrollmentsForm = ({ type, enrollment }: Props) => {

    const { createEnrollment, editEnrollment, goToEnrollmentsList, courses, students } = useEnrollments()
    const [ errors, setErrors ] = useState<Errors>({})

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {

        e.preventDefault()
        setErrors(() => ({}))
        const target = e.target as unknown as { [key in keyof Errors]: { value: string }}

        const courseId = Number(target.courseId?.value)
        const studentId = Number(target.studentId?.value)
        const grade = Number(target.grade?.value)

        let error = false

        if (isNaN(courseId)) {
            setErrors(curr => ({ ...curr, courseId: "Campo obrigatório "}))
            error = true
        }

        if (isNaN(studentId)) {
            setErrors(curr => ({ ...curr, studentId: "Campo obrigatório "}))
            error = true
        }

        if (error) {
            return
        }

        switch (type) {
            case "create":
                createEnrollment({
                    grade: isNaN(grade) ? undefined : grade,
                    course: courses.find(course => course.id === courseId)!,
                    student: students.find(student => student.id === studentId)!
                })
                break

            case "edit":
                editEnrollment({
                    id: enrollment.id,
                    grade: isNaN(grade) ? undefined : grade,
                    course: courses.find(course => course.id === courseId)!,
                    student: students.find(student => student.id === studentId)!
                })
                break
        }

        goToEnrollmentsList!()
    }

    return { onSubmit, errors }
}