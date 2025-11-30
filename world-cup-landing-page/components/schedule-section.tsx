export default function ScheduleSection() {
  const scheduleData = [
    {
      stage: "Vòng Bảng",
      date: "11 - 27 Tháng 6, 2026",
      matches: 80,
      description: "80 trận đấu, mỗi đội chơi 3 trận",
      icon: "📅",
    },
    {
      stage: "Vòng Loại Trực Tiếp",
      date: "28 Tháng 6 - 9 Tháng 7",
      matches: 16,
      description: "Vòng 1/32, 1/16, Tứ kết",
      icon: "⚔️",
    },
    {
      stage: "Bán Kết",
      date: "14 & 15 Tháng 7, 2026",
      matches: 2,
      description: "Sân Mercedes-Benz & AT&T Stadium",
      icon: "🏆",
    },
    {
      stage: "Chung Kết",
      date: "19 Tháng 7, 2026",
      matches: 1,
      description: "Sân MetLife, New York/New Jersey",
      icon: "👑",
    },
  ]

  const upcomingMatches = [
    {
      team1: "🇧🇷 Brazil",
      team2: "🇦🇷 Argentina",
      date: "12 Tháng 6",
      time: "22:00 UTC",
      stadium: "SoFi Stadium",
      city: "Los Angeles",
    },
    {
      team1: "🇫🇷 France",
      team2: "🇩🇪 Germany",
      date: "13 Tháng 6",
      time: "20:00 UTC",
      stadium: "MetLife Stadium",
      city: "New York",
    },
    {
      team1: "🇪🇸 Spain",
      team2: "🇬🇧 England",
      date: "14 Tháng 6",
      time: "18:00 UTC",
      stadium: "AT&T Stadium",
      city: "Dallas",
    },
    {
      team1: "🇳🇱 Netherlands",
      team2: "🇵🇹 Portugal",
      date: "15 Tháng 6",
      time: "20:00 UTC",
      stadium: "Arrowhead Stadium",
      city: "Kansas City",
    },
  ]

  return (
    <section
      id="schedule"
      className="w-full py-20 md:py-32 px-4 bg-gradient-to-b from-black to-black/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <img src="/placeholder.svg?height=600&width=1200" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Lịch{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Thi Đấu</span>
          </h2>
          <p className="text-lg text-gray-300">Từng giai đoạn của World Cup 2026</p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/40 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {item.stage}
              </h3>
              <p className="text-cyan-400 font-semibold text-sm mb-2">{item.date}</p>
              <div className="text-gray-300 space-y-1">
                <p className="font-bold">{item.matches} trận</p>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Matches */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8">Các Trận Đấu Sắp Tới</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingMatches.map((match, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-bold">{match.team1}</span>
                  <span className="text-cyan-400 font-bold">vs</span>
                  <span className="text-white font-bold">{match.team2}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm text-gray-300 mb-4 border-t border-cyan-500/20 pt-4">
                  <div>
                    <p className="text-gray-400 text-xs">Ngày</p>
                    <p className="text-white font-semibold">{match.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Giờ</p>
                    <p className="text-white font-semibold">{match.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Sân</p>
                    <p className="text-white font-semibold">{match.city}</p>
                  </div>
                </div>
                <p className="text-xs text-cyan-300 bg-cyan-500/10 p-2 rounded">📍 {match.stadium}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
