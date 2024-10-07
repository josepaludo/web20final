import {  Tab, Tabs } from "@mui/material"

import { useEffect, useState } from "react"

import { Enrollment } from "../../types/Enrollment"
import { EnrollmentsContext } from "../../contexts/EnrollmentsContext"
import EnrollmentsList from "./EnrollmentsList"
import CreateEnrollment from "./CreateEnrollment"
import EditEnrollment from "./EditEnrollment"
import useStudentsAndCourses from "./useStudentsAndCourses"
import { useEnrollments } from "../../hooks/useEnrollments"


export default function EnrollmentsCrud() {

    const { loadEnrollments } = useEnrollments()
    const [ enrollments, setEnrollments ] = useState<Array<Enrollment>>([])
    const [ index, setIndex ] = useState(0)
    const [ currentEnrollment, setCurrentEnrollment ] = useState<Enrollment|undefined>()

    const { students, courses } = useStudentsAndCourses()

    useEffect(() => {
        loadEnrollments(setEnrollments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Component = {
        0: EnrollmentsList,
        1: CreateEnrollment,
        2: EditEnrollment
    }[index]!

    const editEnrollment = (enrollment: Enrollment) => {
        setCurrentEnrollment(enrollment)
        setIndex(2)
    }

    const goToEnrollmentsList = () => {
        setIndex(0)
    }

    const context = {
        enrollments,
        setEnrollments,
        editEnrollment,
        currentEnrollment,
        goToEnrollmentsList,
        students,
        courses
    }

    return <>
        <EnrollmentsContext.Provider value={context}>
            <Tabs
                className="bg-white mb-4"
                value={index}
                onChange={(_, newIndex) => setIndex(newIndex)}
            >
                <Tab label="Lista de Matrículas" />
                <Tab label="Criar Matrícula" />
                <Tab label="Editar Matrícula" disabled={index !== 2} />
            </Tabs>

            <Component />
        </EnrollmentsContext.Provider>
    </>
}
