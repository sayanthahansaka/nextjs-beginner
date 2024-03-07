import React from 'react'
import Link from 'next/link'
import style from './service.module.css'

const page = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <hr />
      <li><Link href="/" className={style.link}>Home</Link></li>
      <li><Link href="/About">About</Link></li>
      <li><Link href="/Login">Login</Link></li>
      <li><Link href="/Produts">Produts</Link></li>
    </div>
  )
}

export default page
