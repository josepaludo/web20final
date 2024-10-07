import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Enrollment } from '../../types/Enrollment';
import { useEnrollments } from '../../hooks/useEnrollments';
import DeleteEnrollmentButton from './DeleteEnrollmentButton';


type Props = { enrollment: Enrollment }

export default function EnrollmentRow({ enrollment }: Props) {

    const { goToEditEnrollmentPage } = useEnrollments()

    return (
        <TableRow
            key={enrollment.id}
            className="flex gap-16 pt-2 w-fit min-w-full"
        >
            <TableCell>{enrollment.id}</TableCell>
            <TableCell>{enrollment.course?.name}</TableCell>
            <TableCell>{enrollment.student?.name}</TableCell>
            <TableCell>{enrollment.grade}</TableCell>

            <TableCell className='flex items-center'>
                <Tooltip title="Editar Curso">
                    <IconButton onClick={() => goToEditEnrollmentPage(enrollment)} >
                        <EditIcon />
                    </IconButton>
                </Tooltip>

                <DeleteEnrollmentButton id={enrollment.id} />
            </TableCell>

        </TableRow>
    )
}
