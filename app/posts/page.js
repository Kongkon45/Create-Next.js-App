import getAllPosts from '@/lib/getAllPosts'
import React from 'react'
import Button from '../components/button'
import Link from 'next/link'

export default async function Posts() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1>All Posts</h1>
      <div className='grid grid-cols-3 gap-10 text-center'>
        {posts.map((post) => (
          <ul key={post.id} className='bg-orange-400 text-white p-10 rounded-lg'>
            <li>{post.id}</li>
            <li className='mt-3 text-2xl font-bold'><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
            {/* <li className='my-4'>{post.body}</li> */}
            <Button/>
          </ul>
        ))}
      </div>
    </div>
  )
}
