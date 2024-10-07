import { Card, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useEnrollments } from "../../hooks/useEnrollments"
import EnrollmentRow from "./EnrollmentRow"


export default function EnrollmentsList() {

    const { enrollments } = useEnrollments()

    return <>
        <Card elevation={0}>
            <div className="w-full overflow-x-scroll p-6 flex flex-col gap-4">
                <Typography variant="h4">
                    Cursos
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Curso</TableCell>
                            <TableCell>Aluno</TableCell>
                            <TableCell>Nota</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { enrollments.map(enrollment => (
                            <EnrollmentRow
                                key={enrollment.id}
                                enrollment={enrollment}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    </>
}