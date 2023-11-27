import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../user/userSlice'

const UserForm = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = { id: Date.now(), name: userName }
        dispatch(addUser(newUser))
        setUserName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserForm
