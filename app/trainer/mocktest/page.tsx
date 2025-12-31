"use client";
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <SessionProvider>
        <div>MockTest</div>
    </SessionProvider>
    
  )
}

export default page