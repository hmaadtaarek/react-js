import React from 'react'
import { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hmaadtaarek')
        .then(response=> response.json())
        .then((data) => {
            console.log(data)
            setData(data)}
        )
        
    }, [])
    
    return (
        <div className='text-3xl text-center p-4 bg-blue-800 text-white flex flex-col items-center justify-center gap-3'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github profile pic" />
        </div>
    )
}

export default Github
