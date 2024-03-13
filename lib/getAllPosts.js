import React from 'react'

export default async function getAllPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    // console.log(result)

    //    
  return result.json()
}
