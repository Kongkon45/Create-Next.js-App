import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <main className='mt-6'>
        <nav className='flex gap-6'>
          <ul><li><Link href="/about/mission">Mission</Link></li></ul>
          <ul><li><Link href="/about/vision">Vision</Link></li></ul>
        </nav>
        {children}
    </main>
  )
}
