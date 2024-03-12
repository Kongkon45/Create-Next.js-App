import { notFound } from 'next/navigation';
import React from 'react'

const page = ({params}) => {
    const {id} = params;
    if(id === "4"){
        notFound()
    }
  return (
    <div>
        <h2>The blog id is : {id}</h2>
    </div>
  )
}

export default page