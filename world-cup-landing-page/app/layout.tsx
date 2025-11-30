import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 - Lễ Hội Bóng Đá Toàn Cầu",
  description:
    "Trang chủ chính thức World Cup 2026 với lịch thi đấu, thông tin đội bóng, cầu thủ sao và tất cả thông tin bạn cần biết về lễ hội bóng đá lớn nhất thế giới",
  keywords: "World Cup 2026, FIFA, Bóng đá, Lịch thi đấu, Đội tuyển",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
