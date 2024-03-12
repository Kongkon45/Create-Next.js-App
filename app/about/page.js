import React from 'react'
import Button from '../components/button'
import Image from 'next/image'
import myPic from "@/public/images/Kongkon.jpg"

export const metadata = {
  title: "about page",
  description: "This is about page meta description",
};

export default function About() {
  return (
    <div>
      <h1>This is about page by about component</h1>
      <Image className='my-7 rounded-full' src={myPic} alt='this is my pic' placeholder='blur' quality={75} width={200} height={200}/>
      <video width="320" height="240" preload='none' controls>
      <source src="/videos/button.mp4" type='video/mp4' />
      </video>
      <Button/>
    </div>
  )
}
