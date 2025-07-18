'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'; // Import Link from Next.js

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  
  return (
    <nav className='bg-blue-950 text-white justify-around items-center px-4 h-16'>
      <div className='logo font-bold'>
        <span>GET FUND!</span>
      </div>
      <ul className='flex justify-between gap-4'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <div>
          <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            SIGNUP
          </button>
        </div>
        <div>
          {/* Use Next.js Link component */}
          <Link href="/login">
            <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>
              LOGIN
            </button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
