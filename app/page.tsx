"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  })

  const [placesLeft] = useState(12)

  useEffect(() => {
    const target = new Date("May 15, 2026 00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)

      setTimeLeft({ days, hours, minutes })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center p-6 pt-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full top-20 left-20"></div>

      {/* TOP BANNER */}
      <div className="absolute top-0 left-0 w-full bg-yellow-400 text-black text-center p-2 font-semibold">
        Limited Finishing School places available for the 2026 A-Level exams
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-5xl font-bold mb-6 text-yellow-400 leading-tight">
            A-Level Maths Finishing School
            <br />
            for Year 13 Students Preparing for 2026 Exams
          </h1>

          <p className="text-yellow-300 mb-6 text-lg">
            Register your interest for our Programme with Elite Coach Dom. Your child will close knowledge gaps and walk into their
            A-Level exams with confidence.
          </p>

          {/* AUTHORITY */}
          <div className="bg-gray-900 border border-yellow-400 rounded p-4 mb-6 text-yellow-300">
            <ul className="space-y-2">
              <li>✔ Head of Maths & A-Level specialist</li>
              <li>✔ Proven system for closing knowledge gaps quickly</li>
              <li>✔ Limited Finishing School places for Year 13 students</li>
            </ul>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 text-center text-yellow-300 mb-8">

            <div>
              <p className="text-3xl font-bold text-yellow-400">15+</p>
              <p className="text-sm">Years Teaching</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-yellow-400">500+</p>
              <p className="text-sm">Students Supported</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-yellow-400">A-Level</p>
              <p className="text-sm">Exam Specialist</p>
            </div>

          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-4 mb-10">

            <img
              src="/dom.jpg"
              alt="Dom Roberts"
              className="w-28 h-28 rounded-full border-2 border-yellow-400 shadow-xl object-cover"
            />

            <div className="text-yellow-300">
              <p className="font-semibold">Dom Roberts</p>
              <p className="text-sm">
                Head of Maths • A-Level specialist • Exam preparation expert
              </p>
            </div>

          </div>

          {/* TESTIMONIALS */}
          <div className="space-y-6">

            <div className="bg-gray-900 border border-yellow-400 rounded p-4 text-yellow-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="italic">
                "Dom helped my son go from a C to an A in just a few months.
                The finishing school sessions focused exactly on the gaps he needed to close."
              </p>
              <p className="text-sm mt-2 text-yellow-500">
                — Parent of Year 13 student
              </p>
            </div>

            <div className="bg-gray-900 border border-yellow-400 rounded p-4 text-yellow-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="italic">
                "The sessions helped me understand the topics I always struggled with.
                I went into my exams feeling much more confident."
              </p>
              <p className="text-sm mt-2 text-yellow-500">
                — A-Level Maths student
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-black/80 backdrop-blur border border-yellow-400 p-8 rounded-xl shadow-2xl">

          <div className="text-center mb-4">
            <p className="text-yellow-400 font-bold text-lg animate-pulse">
              Only {placesLeft} Finishing School places remaining
            </p>
          </div>

          {/* COUNTDOWN */}
          <div className="text-center mb-6 text-yellow-300">

            <p className="text-sm mb-2">
              Finishing School registration closes in
            </p>

            <div className="flex justify-center gap-4 text-yellow-400 font-bold text-xl">

              <div>
                {timeLeft.days}
                <div className="text-xs text-yellow-300">days</div>
              </div>

              <div>
                {timeLeft.hours}
                <div className="text-xs text-yellow-300">hours</div>
              </div>

              <div>
                {timeLeft.minutes}
                <div className="text-xs text-yellow-300">mins</div>
              </div>

            </div>

          </div>

          {/* STUDY GUIDE CTA */}
          <div className="mt-6">
            <Link
              href="https://hexagon-maths.kit.com/1905c1ebdd"
              className="block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-300 text-black p-3 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Click Here to Start Your Journey with our Free A-Level Maths Study Guide
            </Link>
          </div>

          {/* HOW FINISHING SCHOOL WORKS */}
          <div className="mt-8 bg-gray-900 border border-yellow-400 rounded p-6 text-yellow-300">

            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              How the Finishing School Works
            </h2>

            <ul className="space-y-3">
              <li>✓ Step 1 — Diagnose Current Topic Gaps</li>
              <li>✓ Step 2 — Build on Strengths to Maximise EVERY mark</li>
              <li>✓ Step 3 — Target weak areas with Focused Teaching</li>
              <li>✓ Add On = Intensive Exam practice with the Examiners Cheat Codes to build confidence</li>
            </ul>

          </div>

        </div>

      </div>

    </main>
  )
}