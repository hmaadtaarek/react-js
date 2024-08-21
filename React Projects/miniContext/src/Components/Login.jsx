import React ,{useContext, useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {setUser} = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({username,password})
    }

    return (
        <div>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username' />

            <input type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password' />

            <button
            onClick={handleLogin}
            >Login</button>
        </div>
    )
}

export default Login
