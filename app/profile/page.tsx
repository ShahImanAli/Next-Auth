'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const onLogout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout successfully")
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        try {
            const res = await axios.post('/api/users/me')
            console.log(res.data)
            setData(res.data.data._id)
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">Profile</h1>
            <hr />

            <h2 className="p-2 border border-blue-500 rounded bg-blue-900 text-white mb-6">
                {data === 'nothing' ? "Nothing" : (
                    <Link href={`/profile/${data}`} >
                        {data}
                    </Link>
                )}
            </h2>
            <hr />
            <div className="flex gap-4">
                <button
                    onClick={getUserDetails}
                    className="bg-green-600 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                    Get User Details
                </button>
                <button
                    onClick={onLogout}
                    className="bg-red-600 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfilePage
