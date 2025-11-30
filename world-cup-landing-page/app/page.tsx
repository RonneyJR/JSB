import NavigationBar from "@/components/navigation-bar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StadiumsGallery from "@/components/stadiums-gallery"
import ScheduleSection from "@/components/schedule-section"
import TeamsHistorySection from "@/components/teams-history-section"
import PlayersSection from "@/components/players-section"
import InnovationsSection from "@/components/innovations-section"
import SponsorsFooter from "@/components/sponsors-footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <StadiumsGallery />
      <ScheduleSection />
      <TeamsHistorySection />
      <PlayersSection />
      <InnovationsSection />
      <SponsorsFooter />
    </main>
  )
}
