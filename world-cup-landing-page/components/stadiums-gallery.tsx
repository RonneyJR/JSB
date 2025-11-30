"use client"

import { useState } from "react"

export default function StadiumsGallery() {
  const stadiums = [
    {
      name: "MetLife Stadium",
      city: "New York/New Jersey, USA",
      country: "🇺🇸",
      capacity: "82,500",
      role: "Chung Kết World Cup 2026",
      image: "/metlife-stadium-new-york-nfl-stadium-exterior.jpg",
    },
    {
      name: "SoFi Stadium",
      city: "Los Angeles, USA",
      country: "🇺🇸",
      capacity: "70,240",
      role: "Trận Khai Mạc",
      image: "/sofi-stadium-los-angeles-modern-architecture.jpg",
    },
    {
      name: "Mercedes-Benz Stadium",
      city: "Atlanta, USA",
      country: "🇺🇸",
      capacity: "71,000",
      role: "Bán Kết",
      image: "/mercedes-benz-stadium-atlanta-sports-arena.jpg",
    },
    {
      name: "AT&T Stadium",
      city: "Dallas, USA",
      country: "🇺🇸",
      capacity: "80,000",
      role: "Bán Kết",
      image: "/at-symbol-typography.png",
    },
    {
      name: "Estadio Azteca",
      city: "Mexico City, Mexico",
      country: "🇲🇽",
      capacity: "87,506",
      role: "Trận Lịch Sử",
      image: "/estadio-azteca-mexico-city-football.jpg",
    },
    {
      name: "BMO Field",
      city: "Toronto, Canada",
      country: "🇨🇦",
      capacity: "45,975",
      role: "Sân Nhà Canada",
      image: "/bmo-field-toronto-canada-soccer-stadium.jpg",
    },
    {
      name: "BC Place",
      city: "Vancouver, Canada",
      country: "🇨🇦",
      capacity: "54,500",
      role: "Vòng Bảng",
      image: "/bc-place-vancouver-stadium.jpg",
    },
    {
      name: "Arrowhead Stadium",
      city: "Kansas City, USA",
      country: "🇺🇸",
      capacity: "76,400",
      role: "Vòng Bảng",
      image: "/arrowhead-stadium-kansas-city.jpg",
    },
  ]

  const [selectedStadium, setSelectedStadium] = useState(0)

  return (
    <section id="stadiums" className="w-full py-20 md:py-32 px-4 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            16 Sân Vận Động{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Đẳng Cấp Thế Giới
            </span>
          </h2>
          <p className="text-lg text-gray-300">Trải dài từ Canada đến Mexico, Mỹ</p>
        </div>

        {/* Main Featured Stadium */}
        <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/20">
          <img
            src={stadiums[selectedStadium].image || "/placeholder.svg"}
            alt={stadiums[selectedStadium].name}
            className="w-full h-96 object-cover"
          />
          <div className="bg-gradient-to-r from-slate-900 to-black p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">
                  {stadiums[selectedStadium].country} {stadiums[selectedStadium].name}
                </h3>
                <p className="text-cyan-400 font-bold mb-2">{stadiums[selectedStadium].city}</p>
                <p className="text-white mb-1">
                  <span className="text-gray-400">Sức chứa:</span> {stadiums[selectedStadium].capacity}
                </p>
                <p className="text-blue-400 font-semibold">{stadiums[selectedStadium].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stadium Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stadiums.map((stadium, index) => (
            <button
              key={index}
              onClick={() => setSelectedStadium(index)}
              className={`relative group overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedStadium === index
                  ? "ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "border border-slate-700 hover:border-cyan-400"
              }`}
            >
              <img
                src={stadium.image || "/placeholder.svg"}
                alt={stadium.name}
                className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                <div>
                  <p className="text-white font-bold text-xs">{stadium.country}</p>
                  <p className="text-cyan-300 text-xs font-semibold truncate">{stadium.name}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
