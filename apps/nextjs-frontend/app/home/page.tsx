"use client"

import Layout from '@/components/Layout'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react'

export default function HomePage() {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) return <p>Loading...</p>;
    if (!session) {
        redirect("/auth/login")  
    }
  return (
    <div className='min-h-screen'>
        <Layout key={""}/>
    </div>
  )
}

