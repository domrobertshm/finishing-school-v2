"use client"

import { useEffect } from "react"

export default function GuideDownloaded() {

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }, [])

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-yellow-400 p-6">

      <div className="max-w-xl text-center">

        <h1 className="text-4xl font-bold mb-6">
          Your Study Guide is on the Way
        </h1>

        <p className="text-lg text-yellow-300 mb-6">
          Check your email to download the A-Level Maths Exam Strategy Guide.
        </p>

        <p className="text-yellow-500 text-sm">
          If it doesn't appear in a few minutes, check your spam folder.
        </p>

      </div>

    </main>
  )
}
