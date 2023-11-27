import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../user/userSlice'

const UserList = () => {
    const users = useSelector((state) => state.user.users)
    const dispatch = useDispatch()

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId))
    }

    // if (!users || users.length === 0) {
    //     return <p>No users available</p>
    // }

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                    <button onClick={() => handleDelete(user.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default UserList
