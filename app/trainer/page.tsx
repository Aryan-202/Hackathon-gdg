"use client";

import React from 'react';
import TrainerDashboard from '@/components/Pages/TrainerDashboard'
import { SessionProvider } from "next-auth/react";

const TrainerDashboardPage = () => {
  return ( 
    <SessionProvider>
      <TrainerDashboard />
    </SessionProvider>
  );
}

export default TrainerDashboardPage;