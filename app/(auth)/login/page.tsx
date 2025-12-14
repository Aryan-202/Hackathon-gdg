'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

const page = () => {
  return (
    <div>login
        <button onClick={()=> signIn('google')}>
            signIn with google
        </button>

    </div>
  )
}

export default page