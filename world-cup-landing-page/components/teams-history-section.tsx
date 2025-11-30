export default function TeamsHistorySection() {
  const teams = [
    {
      name: "Brazil",
      flag: "🇧🇷",
      titles: "5",
      achievement: "Nhà vô địch bóng đá thế giới nhiều lần nhất",
      history: "Đội tuyển mạnh nhất thế giới với các ngôi sao Pelé, Ronaldo, Ronaldinho...",
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      titles: "4",
      achievement: "Vô địch World Cup 4 lần (1954, 1974, 1990, 2014)",
      history: "Một trong những nền bóng đá tổ chức tốt nhất thế giới",
    },
    {
      name: "Italy",
      flag: "🇮🇹",
      titles: "4",
      achievement: "Vô địch World Cup 4 lần (1934, 1938, 1982, 2006)",
      history: "Nền bóng đá cực kỳ mạnh mẽ với phong cách phòng ngự kiên cố",
    },
    {
      name: "France",
      flag: "🇫🇷",
      titles: "2",
      achievement: "Vô địch World Cup 2 lần (1998, 2018)",
      history: "Đội tuyển hiện tại đang ở đỉnh cao với Mbappé, Benzema...",
    },
    {
      name: "Argentina",
      flag: "🇦🇷",
      titles: "3",
      achievement: "Vô địch World Cup 3 lần (1978, 1986, 2022)",
      history: "Vừa vô địch World Cup 2022 với Messi - huyền thoại bóng đá",
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      titles: "1",
      achievement: "Vô địch World Cup 1 lần (2010)",
      history: "Một trong những tuyển lực mạnh với phong cách tiki-taka",
    },
    {
      name: "England",
      flag: "🇬🇧",
      titles: "1",
      achievement: "Vô địch World Cup 1 lần (1966)",
      history: "Quốc gia sáng lập bóng đá hiện đại, sở hữu Premier League",
    },
    {
      name: "Uruguay",
      flag: "🇺🇾",
      titles: "2",
      achievement: "Vô địch World Cup 2 lần (1930, 1950)",
      history: "Đội tuyển huyền thoại từ thời kỳ đầu của World Cup",
    },
  ]

  return (
    <section id="teams" className="w-full py-20 md:py-32 px-4 bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Lịch Sử Các{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Đội Bóng
            </span>
          </h2>
          <p className="text-lg text-gray-300">Những đội tuyển mạnh nhất với thành tích vô địch</p>
        </div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 hover:border-amber-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">{team.flag}</span>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-amber-400 font-bold text-sm">{team.titles} Vô Địch</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white text-sm font-semibold">{team.achievement}</p>
                <p className="text-gray-300 text-xs leading-5">{team.history}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
