import { SessionProvider } from 'next-auth/react'
import React from 'react'

const MockTest = () => {
  return (
    <SessionProvider>
        <div>Mock Test Page</div>
    </SessionProvider>
  )
}

export default MockTest