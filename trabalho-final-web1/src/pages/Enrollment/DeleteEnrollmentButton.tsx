import { IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AppModal from '../../components/AppModal'
import { useEnrollments } from '../../hooks/useEnrollments'


export default function DeleteEnrollmentButton({ id }: { id: number }) {

    const { deleteEnrollment } = useEnrollments()

    const DeleteButton = ({ onClick }: { onClick: () => void }) => (
        <Tooltip title="Remover Curso">
            <IconButton
                color="error"
                onClick={onClick}
            >
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )

    return (
        <AppModal
            Component={DeleteButton}
            cancel='Voltar'
            confirm='Remover Curso'
            description='O curso será removido da lista de cursos. Essa ação é irreversível'
            onConfirm={() => deleteEnrollment(id)}
            title='Remover Curso?'
        >
        </AppModal>
    )
}