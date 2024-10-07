import { useContext } from "react"
import { Student } from "../types/Student"
import { StudentsContext } from "../contexts/StudentsContext"
import { studentApi } from "../api/studentsApi"


export const useStudents = () => {

    const { setStudents, students, editStudent, currentStudent, goToStudentsList } = useContext(StudentsContext)

    const loadStudents = (callback: (students: Array<Student>) => void) => {
        studentApi.get(callback)
    }

    const deleteStudent = (id: number) => {
        studentApi.delete(id, () => {
            setStudents!(students => [
                ...students.filter(student => student.id !== id)
            ])
        })
    }

    const createStudent = (student: Omit<Student, "id">) => {
        studentApi.create({
            ...student,
            birthDate: transformDate(student.birthDate)
        }, (newStudent) => {
            setStudents!(curr => [ ...curr, newStudent ])
        })
    }

    const _editStudent = (student: Student) => {

        studentApi.update({
            ...student,
            birthDate: transformDate(student.birthDate)
        }, () => {
            setStudents!(students => [
                ...students.filter(_student => _student.id !== student.id),
                student
            ])
        // @ts-expect-error dfsdfs
        }, (err) => {
            console.log(err)
        })
    }

    const goToEditStudentPage = (student: Student) => {
        editStudent!(student)
    }

    return {
        loadStudents,
        createStudent,
        deleteStudent,
        editStudent: _editStudent,
        goToEditStudentPage,
        students,
        student: currentStudent,
        goToStudentsList
    }
}

const transformDate = (date: string) => {
    const [ month, day, year ] = date.split("/")
    return `${year}-${month}-${day}`
}