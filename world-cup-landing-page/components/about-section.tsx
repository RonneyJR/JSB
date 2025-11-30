export default function AboutSection() {
  const facts = [
    {
      number: "48",
      label: "Đội Tuyển",
      description: "Lần đầu tiên World Cup có 48 đội tham dự",
    },
    {
      number: "104",
      label: "Trận Đấu",
      description: "Tổng số trận thi đấu tại giải vô địch",
    },
    {
      number: "16",
      label: "Thành Phố",
      description: "Diễn ra tại 16 sân vận động hiện đại",
    },
    {
      number: "39",
      label: "Ngày",
      description: "Kéo dài từ 11/6 đến 19/7 năm 2026",
    },
  ]

  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 px-4 bg-black border-t border-amber-500/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <img src="/world-cup-2026-celebration-fans.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Giới Thiệu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              World Cup 2026
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Lễ hội bóng đá quy mô thế giới lớn nhất trong lịch sử, diễn ra lần đầu tiên tại ba quốc gia: Canada, Mexico
            và Hoa Kỳ
          </p>
        </div>

        {/* Description */}
        <div className="mb-16 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-8 md:p-12">
          <p className="text-white text-lg leading-8 mb-6">
            FIFA World Cup 2026 sẽ là sự kiện bóng đá lớn nhất trong lịch sử của giải đấu. Lần đầu tiên, giải vô địch
            được mở rộng từ 32 lên 48 đội tuyển, mang lại cơ hội cho nhiều quốc gia hơn để tham gia và cạnh tranh trên
            sân cỏ toàn cầu.
          </p>
          <p className="text-white text-lg leading-8">
            Với 104 trận đấu được tổ chức tại 16 thành phố khác nhau, giải đấu này hứa hẹn sẽ là một cuộc lễ hội bóng đá
            vô cùng rực rỡ và đầy kịch tính, mang đến những khoảnh khắc không thể quên cho hàng triệu người hâm mộ trên
            toàn thế giới.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6 md:p-8 text-center hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2">
                {fact.number}
              </div>
              <p className="text-white font-bold text-sm md:text-base mb-2">{fact.label}</p>
              <p className="text-gray-400 text-xs md:text-sm">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
