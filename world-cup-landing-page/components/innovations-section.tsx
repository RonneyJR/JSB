export default function InnovationsSection() {
  const innovations = [
    {
      title: "48 Đội Tuyển Thay Vì 32",
      description: "Lần đầu tiên World Cup mở rộng tới 48 đội, mang lại cơ hội cho nhiều quốc gia",
      icon: "🌍",
      details: "Cấu trúc: 12 bảng, mỗi bảng 4 đội",
      image: "/world-cup-2026-teams-flags-nations.jpg",
    },
    {
      title: "3 Quốc Gia Chủ Nhà",
      description: "Lần đầu tiên World Cup được tổ chức tại ba quốc gia: Canada, Mexico, Mỹ",
      icon: "🇺🇸",
      details: "Sự hợp tác giữa ba quốc gia Bắc Mỹ",
      image: "/canada-mexico-usa-north-america.jpg",
    },
    {
      title: "104 Trận Đấu",
      description: "Tăng từ 64 trận (32 đội) lên 104 trận với 48 đội",
      icon: "⚽",
      details: "80 trận vòng bảng + 24 trận loại trực tiếp",
      image: "/football-soccer-match-stadium.jpg",
    },
    {
      title: "Sân Vận Động Hiện Đại",
      description: "Tất cả 16 sân vận động là những cơ sở hiện đại cực kỳ",
      icon: "🏟️",
      details: "Sức chứa tối đa lên tới 82.500 chỗ",
      image: "/modern-football-stadium-night.jpg",
    },
    {
      title: "Công Nghệ VAR Nâng Cao",
      description: "Sử dụng công nghệ VAR 4K và AI để phán quyết chính xác hơn",
      icon: "📹",
      details: "Giảm thiểu tranh cãi và quyết định sai lầm",
      image: "/var-technology-football-referee.jpg",
    },
    {
      title: "Quả Bóng Đặc Biệt",
      description: "Quả bóng Adidas Al Rihla được thiết kế đặc biệt cho thời tiết khác nhau",
      icon: "🏆",
      details: "Công nghệ quả bóng thông minh mới nhất",
      image: "/adidas-fifa-world-cup-official-ball.jpg",
    },
  ]

  return (
    <section id="news" className="w-full py-20 md:py-32 px-4 bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Những Thay Đổi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Mới Lạ</span>
          </h2>
          <p className="text-lg text-gray-300">So với các kỳ World Cup trước đây</p>
        </div>

        {/* Innovations Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={innovation.image || "/placeholder.svg"}
                  alt={innovation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6 relative">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{innovation.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-6">{innovation.description}</p>
                <div className="pt-4 border-t border-cyan-500/20">
                  <p className="text-cyan-400 font-semibold text-sm">✨ {innovation.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
