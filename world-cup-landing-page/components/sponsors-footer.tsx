export default function SponsorsFooter() {
  const sponsors = [
    { name: "Adidas", logo: "👟", color: "from-black to-gray-800" },
    { name: "Nike", logo: "✓", color: "from-orange-600 to-orange-800" },
    { name: "Puma", logo: "🐆", color: "from-red-600 to-red-800" },
  ]

  const quickLinks = [
    { name: "Trang Chủ", href: "#" },
    { name: "Lịch Thi Đấu", href: "#schedule" },
    { name: "Các Đội Bóng", href: "#teams" },
    { name: "Cầu Thủ", href: "#players" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: "f" },
    { name: "Twitter", icon: "𝕏" },
    { name: "Instagram", icon: "📷" },
    { name: "YouTube", icon: "▶" },
  ]

  return (
    <footer className="w-full bg-black border-t border-amber-500/30 py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sponsors Section */}
        <div className="mb-16 pb-16 border-b border-amber-500/20">
          <h3 className="text-center text-2xl font-bold text-white mb-12">Nhà Tài Trợ Chính Thức</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${sponsor.color} rounded-xl p-8 md:p-12 text-center group hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{sponsor.logo}</div>
                <h4 className="text-white font-bold text-2xl">{sponsor.name}</h4>
                <p className="text-gray-200 text-sm mt-2">Official Partner</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">FIFA World Cup 2026</h4>
            <p className="text-gray-400 text-sm leading-6">
              Lễ hội bóng đá toàn cầu lớn nhất với 48 đội tuyển, 104 trận đấu và 16 thành phố chủ nhà.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Theo Dõi</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 FIFA World Cup. Tất cả quyền được bảo lưu.</p>
          <p className="text-gray-500 text-xs mt-2">Trang web do v0 thiết kế | Được tài trợ bởi Adidas, Nike, Puma</p>
        </div>
      </div>
    </footer>
  )
}
