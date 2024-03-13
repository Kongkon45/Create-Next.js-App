import getPost from '@/lib/getPost';
import React from 'react'

export default async function page({params}) {
    const {id} = params;
    const post = await getPost(id)
  return (
    <div>
        {/* <h1>This post id is : {id}</h1> */}
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}
