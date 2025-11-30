"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Trang Chủ", href: "#home" },
    { name: "Giới Thiệu", href: "#about" },
    { name: "Lịch Thi Đấu", href: "#schedule" },
    { name: "Các Đội Bóng", href: "#teams" },
    { name: "Cầu Thủ", href: "#players" },
    { name: "Tin Tức", href: "#news" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-slate-900 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-black tracking-tighter">
              <span className="text-white">FIFA</span>
              <span className="text-cyan-400"> 2026</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white font-semibold hover:text-cyan-400 transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-black rounded-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 uppercase tracking-wider text-sm">
            Mua Vé
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white hover:text-cyan-400 transition-colors font-semibold uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full m-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-black rounded-sm uppercase tracking-wider">
              Mua Vé
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
