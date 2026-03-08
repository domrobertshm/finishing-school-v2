"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

export default function Home() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  })

  const [placesLeft] = useState(12)

  useEffect(() => {
    const target = new Date().getTime() + (7 * 24 * 60 * 60 * 1000)

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

    <Script
  src="https://f.convertkit.com/ckjs/ck.5.js"
  strategy="afterInteractive"
/>

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[160px] rounded-full top-20 left-20"></div>

      {/* TOP BANNER */}
      <div className="absolute top-0 left-0 w-full bg-yellow-400 text-black text-center p-2 font-semibold">
        Limited Finishing School places available for the 2026 A-Level exams
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
<div className="text-center bg-black/40 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 shadow-2xl">

  <p className="text-yellow-300 mb-6 text-lg">
    For Year 13 students taking A-Level Maths in 2026
  </p>

  <h1 className="text-4xl font-bold mb-6 text-yellow-400 leading-tight">
    A-Level Maths Finishing School
    <br />
    Find Out Which A-Level Maths Topics Are Costing You The Most Marks
  </h1>

  <p className="text-yellow-300 mb-6 text-lg">
    Click to download the free strategy guide and discover how Year 13 students can close knowledge gaps before the 2026 exams.
  </p>

          {/* TOP CTA */}
          <div className="mt-6">

            <button
  onClick={() => window.open("https://hexagon-maths.kit.com/1905c1ebdd", "_blank")}
  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-7 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg"
>
  Download the Free A-Level Maths Study Guide
</button>

            <p className="text-yellow-400 text-xs mt-2">
              Free 12-page PDF • Instant download
            </p>

          </div>

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
              <p className="text-3xl font-bold text-yellow-400">20+</p>
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

            {/* MID PAGE CTA */}
            <div className="mt-16 text-center bg-gray-900 border border-yellow-400 rounded-xl p-8 shadow-xl">

              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                Want Personal Help With A-Level Maths?
              </h2>

              <p className="text-yellow-300 mb-6">
                Book a free 15-minute strategy session with Dom to identify the topics that could gain you the most marks before the exams.
              </p>

              <a
  href="https://calendly.com/domroberts83/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-7 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg"
>
  Book My Free 15-Minute Maths Strategy Call
</a>

              <p className="text-yellow-400 text-sm mt-4">
                Only {placesLeft} Finishing School places available
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

            <p className="text-center text-yellow-300 text-sm mb-3">
              Free 12-page PDF • Instant download
            </p>

            <button
  onClick={() => window.open("https://hexagon-maths.kit.com/1905c1ebdd", "_blank")}
  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-7 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-lg"
  >
  Download the Free A-Level Maths Study Guide
</button>

            <p className="text-center text-yellow-400 text-xs mt-2">
              Used by ambitious Year 13 students aiming for A/A*
            </p>

          </div>

          {/* WHAT'S IN THE GUIDE */}
          <div className="bg-gray-900 border border-yellow-400 rounded p-6 mb-6 text-yellow-300">

            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              What You'll Learn in the Free Study Guide
            </h3>

            <ul className="space-y-3">
              <li>✓ The 6 A-Level Maths topics where students lose the most marks</li>
              <li>✓ The exact revision structure top students use before exams</li>
              <li>✓ The most common mistakes examiners see every year</li>
              <li>✓ How to turn weak topics into reliable exam marks</li>
              <li>✓ A simple weekly revision system for the final months</li>
            </ul>

          </div>

          {/* PARENT SECTION */}
          <div className="bg-gray-900 border border-yellow-400 rounded p-6 mb-6 text-yellow-300">

            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              For Parents of Year 13 Students
            </h3>

            <p className="mb-4">
              Many capable students lose marks in A-Level Maths simply because of small
              knowledge gaps or exam technique mistakes.
            </p>

            <p className="mb-4">
              This finishing school programme focuses on identifying those gaps quickly
              and strengthening the exact topics that will make the biggest difference
              before the exams.
            </p>

            <ul className="space-y-2">
              <li>✓ Diagnose weak topics quickly</li>
              <li>✓ Build confidence in the hardest exam questions</li>
              <li>✓ Help students walk into the exam calm and prepared</li>
            </ul>

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
