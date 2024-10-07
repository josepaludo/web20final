import { Tab, Tabs } from "@mui/material"
import { useState } from "react"
import StudentCrud from "./Student/StudentCrud"
import CourseCrud from "./Course/CourseCrud"
import EnrollmentCrud from "./Enrollment/EnrollmentCrud"


export default function MainPage() {

    const [ index, setIndex ] = useState(0)

    const Component = {
        0: StudentCrud,
        1: CourseCrud,
        2: EnrollmentCrud
    }[index]!

    return <>
        <main className="max-w-[1200px] mx-auto p-6">
            <Tabs
                className="bg-white mb-4"
                value={index}
                onChange={(_, newIndex) => setIndex(newIndex)}
            >
                <Tab label="Alunos" />
                <Tab label="Cursos" />
                <Tab label="Matrículas" />
            </Tabs>

            <Component />
        </main>
    </>
}
