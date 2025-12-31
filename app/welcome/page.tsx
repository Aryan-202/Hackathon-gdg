// import FeatureSelectionPage from '@/components/FeatureSelectionPage'
"use client";
import AuthLandingPage from '@/components/Pages/AuthLandinPage'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
      <SessionProvider>
<AuthLandingPage/>
      </SessionProvider>
      
    </div>
  )
}

export default page