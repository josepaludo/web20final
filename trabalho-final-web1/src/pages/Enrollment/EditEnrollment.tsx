import { useEnrollments } from "../../hooks/useEnrollments"
import EnrollmentForm from "./EnrollmentForm"

export default function EditEnrollment() {

    const { enrollment } = useEnrollments()

    if (!enrollment) {
        return
    }

    return <EnrollmentForm enrollment={enrollment} />
}