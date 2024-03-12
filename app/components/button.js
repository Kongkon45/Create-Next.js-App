"use client";
import React from 'react'

export default function Button() {
  return (
    <div>
        <button className='bg-green-400 text-white rounded-lg py-1 px-4' onClick={()=> console.log("Clicked me")}>Click here</button>
    </div>
  )
}
