import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'


function AllPosts() {
    const [post, setPost] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((post)=>{
            if (post) {
                setPost(post.documents)
            }
        })
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {post.map((singlepost)=> (
                        <div key={singlepost.$id} className='w-1/4 p-2'>
                            <PostCard post={singlepost} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
