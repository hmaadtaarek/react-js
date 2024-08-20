import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {id} = useParams()
    return (
        <div className='text-3xl text-center p-4 bg-blue-800 text-white rounded'>
            User : {id}
        </div>
    )
}

export default User
