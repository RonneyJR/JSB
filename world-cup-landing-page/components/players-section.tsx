export default function PlayersSection() {
  const players = [
    {
      name: "Kylian Mbappé",
      country: "France 🇫🇷",
      position: "Forward",
      club: "Real Madrid",
      description: "Siêu sao trẻ, tốc độ chóng mặt, là ứng cử viên hàng đầu cho Quả bóng vàng",
      image: "/kylian-mbappe-football-action-shot.jpg",
    },
    {
      name: "Jude Bellingham",
      country: "England 🇬🇧",
      position: "Midfielder",
      club: "Real Madrid",
      description: "Sao trẻ tài ba, là trụ cột đội tuyển Anh, đầy tiềm năng",
      image: "/jude-bellingham-footballer.jpg",
    },
    {
      name: "Vinícius Júnior",
      country: "Brazil 🇧🇷",
      position: "Forward",
      club: "Real Madrid",
      description: "Tiền vệ trái sở hữu kỹ năng điêu luyện, tốc độ cực nhanh",
      image: "/vinicius-junior-brazil-footballer.jpg",
    },
    {
      name: "Florian Wirtz",
      country: "Germany 🇩🇪",
      position: "Forward",
      club: "Bayer Leverkusen",
      description: "Sao trẻ Đức chơi bóng rất sáng tạo, có thể dứt khoát",
      image: "/florian-wirtz-germany-football.jpg",
    },
    {
      name: "Pedri",
      country: "Spain 🇪🇸",
      position: "Midfielder",
      club: "Barcelona",
      description: "Tiền vệ kỹ thuật cao, cách chuyển bóng góp phần tạo tuyên bố",
      image: "/pedri-barcelona-midfielder.jpg",
    },
    {
      name: "Rodri",
      country: "Spain 🇪🇸",
      position: "Midfielder",
      club: "Manchester City",
      description: "Quả bóng vàng 2024, tiền vệ phòng thủ xuất sắc nhất thế giới",
      image: "/rodri-manchester-city-footballer.jpg",
    },
    {
      name: "Neymar",
      country: "Brazil 🇧🇷",
      position: "Forward",
      club: "Al-Hilal",
      description: "Ngôi sao hàng đầu Brazil, là lão tướng của đội tuyển",
      image: "/neymar-brazil-football-legend.jpg",
    },
    {
      name: "Harry Kane",
      country: "England 🇬🇧",
      position: "Striker",
      club: "Bayern Munich",
      description: "Tiền đạo kinh nghiệm, ghi bàn cực kỳ chính xác, lão làng",
      image: "/harry-kane-england-striker.jpg",
    },
  ]

  return (
    <section id="players" className="w-full py-20 md:py-32 px-4 bg-gradient-to-b from-black to-black/50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Cầu Thủ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Tiềm Năng</span>
          </h2>
          <p className="text-lg text-gray-300">Những sao sáng sẽ tỏa sáng tại World Cup 2026</p>
        </div>

        {/* Players Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Player Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-black to-gray-900">
                <img
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Player Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm">{player.country}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Vị trí:</span> {player.position}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">CLB:</span> {player.club}
                  </p>
                  <p className="text-gray-400 text-xs leading-4">{player.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
