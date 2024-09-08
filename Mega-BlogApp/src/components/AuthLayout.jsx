import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const [loader , setLoader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth?.status)

    useEffect(()=> {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    },[ authStatus, authentication, navigate])
    return loader? <h2>Loading...</h2> : <>{children}</>
}

 