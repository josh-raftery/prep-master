'use client'

import { UserContext } from '@components/client/UserProvider'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@components/client/Loading'

export default function SignOut() {
    const router = useRouter()
    const {signOut} = useContext(UserContext)
    signOut()
    router.push('/home')
    return (
        <Loading/>
    )
}