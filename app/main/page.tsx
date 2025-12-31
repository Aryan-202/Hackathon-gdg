// import FeatureSelectionPage from '@/components/FeatureSelectionPage'
"use client";
import FeatureSelectionPage from '@/components/FeatureSelectionPage';
// import AuthLandingPage from '@/components/Pages/AuthLandinPage'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>
      <SessionProvider>
<FeatureSelectionPage/>
      </SessionProvider>
      
    </div>
  )
}

export default page