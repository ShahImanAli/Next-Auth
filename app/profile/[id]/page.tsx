'use client'
import React, { use } from 'react'

function UserProfile({ params }: any) {
    const resolvedParams: any = use(params);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
            <div className="flex flex-col items-center space-y-8 max-w-sm w-full">

                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">User Profile</h1>
                </div>

                <div className="w-full bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl backdrop-blur-sm text-center">
                    <span className="text-orange-400 font-mono text-lg break-all selection:bg-orange-500/30">
                        {resolvedParams.id}
                    </span>
                </div>

                <div className="pt-4">
                    <button
                        onClick={() => window.history.back()}
                        className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                        <span>&larr;</span> Back to Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile