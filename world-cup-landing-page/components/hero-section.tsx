"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-06-11").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        {/* Dark green base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Geometric shapes with bright accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Geometric diagonal cuts */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
            <polygon points="0,0 500,0 400,900 0,900" fill="url(#grad1)" opacity="0.1" />
            <polygon points="900,0 1440,0 1440,500 800,900 0,900" fill="url(#grad2)" opacity="0.1" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-25">
        <img src="/fifa-world-cup-2026-stadium-aerial-view-with-crowd.jpg" alt="World Cup Stadium" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 space-y-8">
        <div className="space-y-4">
          <div className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
            <div className="text-white mb-2">FIFA</div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400">
              WORLD CUP
            </span>
            <br />
            <span className="text-6xl md:text-8xl font-black text-cyan-400 tracking-wider">2026</span>
          </div>
          <p className="text-lg md:text-xl text-cyan-300 font-bold tracking-widest pt-4">
            CANADÁ • MÉXICO • ESTADOS UNIDOS
          </p>
          <p className="text-white font-bold text-sm md:text-base tracking-wide">
            104 TRẬN ĐẤU | 48 ĐỘI TUYỂN | 16 THÀNH PHỐ
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-4 mt-12">
          {[
            { label: "NGÀY", value: timeLeft.days },
            { label: "GIỜ", value: timeLeft.hours },
            { label: "PHÚT", value: timeLeft.minutes },
            { label: "GIÂY", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 md:w-28 h-20 md:h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/30">
                <span className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-white font-black text-xs md:text-sm tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black rounded-sm text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
            Mua Vé Ngay
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-black rounded-sm text-lg hover:bg-cyan-400/10 transition-all duration-300 uppercase tracking-wider">
            Khám Phá Thêm
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-cyan-400 text-sm mb-2 font-bold uppercase tracking-wider">Scroll xuống</p>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
