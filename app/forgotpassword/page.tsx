'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            await axios.post('/api/users/forgotpassword', { email })
            setSubmitted(true)
            toast.success('Reset link sent to your email')
        } catch (error: any) {
            toast.error(error.response?.data?.error || 'Unable to send reset link')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 text-center">Forgot Password</h1>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Enter your account email and we will send you a reset link.
                </p>

                {!submitted ? (
                    <form onSubmit={onSubmit} className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || email.length === 0}
                            className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>
                ) : (
                    <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                        Reset link sent. Please check your inbox and open the link to set a new password.
                    </div>
                )}

                <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                    <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                        Go to Login
                    </Link>
                    <Link href="/signup" className="text-gray-700 hover:text-gray-900 font-medium">
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
