'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

function VerifyEmailPage() {
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [verified, setVerified] = useState(false)

    const verifyEmail = async () => {
        try {
            setLoading(true)
            setError(false)
            await axios.post('/api/users/verifyemail', { token })
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.log(error.response?.data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get('token')
        setToken(urlToken || '')
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            verifyEmail()
        }
    }, [token])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-200 text-center">
                <h1 className="text-3xl font-bold text-gray-900">Verify Email</h1>
                <p className="mt-2 text-sm text-gray-600">We are confirming your account now.</p>

                {verified && (
                    <div className="mt-6 text-center">
                        <h2 className="text-xl font-semibold text-green-700 mb-4">Email verified successfully</h2>
                        <div className="flex items-center justify-center gap-3">
                            <Link
                                href="/login"
                                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Go to Login
                            </Link>
                            <Link
                                href="/"
                                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="mt-6 text-center">
                        <h2 className="text-xl font-semibold text-red-700 mb-4">Verification link is invalid or expired</h2>
                        <div className="flex items-center justify-center gap-3">
                            <Link
                                href="/login"
                                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Go to Login
                            </Link>
                            <Link
                                href="/signup"
                                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Go to Signup
                            </Link>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="text-center mt-6">
                        <p className="text-blue-600 animate-pulse text-base font-medium">Processing verification...</p>
                    </div>
                )}

                {!loading && !verified && !error && (
                    <div className="mt-6">
                        <Link
                            href="/login"
                            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Back to Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmailPage