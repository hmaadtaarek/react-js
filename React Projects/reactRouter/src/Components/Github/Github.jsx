import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hmaadtaarek')
    //     .then(response=> response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)}
    //     )
        
    // }, [])
    
    return (
        <div className='text-3xl text-center p-4 bg-blue-800 text-white flex flex-col items-center justify-center gap-3'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github profile pic" />
        </div>
    )
}


export default Github

const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/hmaadtaarek')
    return response.json()
}
export {githubInfo}

