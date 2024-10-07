
import { Button, Card, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

import { Enrollment } from "../../types/Enrollment";
import { useEnrollmentsForm } from "../../hooks/useEnrollmentsForm";
import { useEnrollments } from "../../hooks/useEnrollments";


type Props = {
    enrollment?: Enrollment
}

export default function EnrollmentForm({ enrollment }: Props) {

    const { courses, students } = useEnrollments()
    const { onSubmit, errors } = useEnrollmentsForm(
        enrollment ?
        { type: "edit", enrollment } :
        { type: "create" }
    )

    const defaultValues = !enrollment ? {} : {
        courseId: enrollment?.course?.id ?? "",
        studentId: enrollment?.student?.id ?? "",
        grade: enrollment?.grade ?? ""
    }

    const title = enrollment ? "Editar Matrícula" : "Criar Matrícula"

    return (
        <Card className="p-6 flex flex-col gap-6" elevation={0}>
            <Typography variant="h5">
                { title }
            </Typography>
            <form
                onSubmit={onSubmit}
                className="grid md:grid-cols-2 gap-4 items-start"
            >

                <FormControl
                    error={!!errors?.courseId}
                >
                    <InputLabel id="courseId">
                        Curso
                    </InputLabel>
                    <Select
                        id="courseId"
                        name="courseId"
                        label="Curso"
                        defaultValue={defaultValues.courseId ?? ""}
                    >
                        { courses.map(({ id, name }) => (
                            <MenuItem key={id} value={id}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    { errors?.courseId &&
                        <FormHelperText>
                            { errors.courseId }
                        </FormHelperText>
                    }
                </FormControl>

                <FormControl
                    error={!!errors?.studentId}
                >
                    <InputLabel id="studentId">
                        Aluno
                    </InputLabel>
                    <Select
                        id="studentId"
                        name="studentId"
                        label="Aluno"
                        defaultValue={defaultValues.studentId ?? ""}
                    >
                        { students.map(({ id, name }) => (
                            <MenuItem key={id} value={id}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    { errors?.studentId &&
                        <FormHelperText>
                            { errors.studentId }
                        </FormHelperText>
                    }
                </FormControl>


                <TextField
                    name="grade"
                    label="Nota"
                    placeholder="Nota"
                    defaultValue={defaultValues?.grade ?? ""}
                    error={!!errors.grade}
                    helperText={errors.grade}
                />


                <div className="flex md:col-span-2 xl:col-span-4 justify-end">
                    <Button
                        variant="contained"
                        disableElevation
                        type="submit"
                        className="w-full md:w-fit"
                    >
                        { title }
                    </Button>
                </div>
            </form>
        </Card>
    )
}
