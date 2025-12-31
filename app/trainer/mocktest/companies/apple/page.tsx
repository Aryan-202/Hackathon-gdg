"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <SessionProvider>
        <div>interview</div>
    </SessionProvider>
    
  )
}

export default page