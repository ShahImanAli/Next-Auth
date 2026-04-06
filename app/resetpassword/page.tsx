'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function ResetPasswordPage() {
    const [token, setToken] = useState('')
    const [tokenLoaded, setTokenLoaded] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get('token') || ''
        setToken(urlToken)
        setTokenLoaded(true)
    }, [])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            return
        }

        try {
            setLoading(true)
            await axios.post('/api/users/resetpassword', {
                token,
                password,
            })
            setSuccess(true)
            toast.success('Password reset successful')
        } catch (error: any) {
            toast.error(error.response?.data?.error || 'Failed to reset password')
        } finally {
            setLoading(false)
        }
    }

    if (tokenLoaded && !token) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-200 text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Invalid Reset Link</h1>
                    <p className="mt-2 text-sm text-gray-600">This password reset link is missing a token.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <Link href="/forgotpassword" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors">
                            Request New Link
                        </Link>
                        <Link href="/login" className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition-colors">
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 text-center">Reset Password</h1>
                <p className="mt-2 text-sm text-gray-600 text-center">Choose a new password for your account.</p>

                {!tokenLoaded && (
                    <p className="mt-4 text-center text-sm text-gray-500">Validating reset link...</p>
                )}

                {tokenLoaded && !success ? (
                    <form onSubmit={onSubmit} className="mt-6 space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                required
                                minLength={6}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || password.length < 6 || confirmPassword.length < 6}
                            className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? 'Updating Password...' : 'Update Password'}
                        </button>
                    </form>
                ) : (
                    <div className="mt-6 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                        Password updated successfully. You can now sign in with your new password.
                    </div>
                )}

                <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                    <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                        Go to Login
                    </Link>
                    <Link href="/forgotpassword" className="text-gray-700 hover:text-gray-900 font-medium">
                        Request New Link
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage
