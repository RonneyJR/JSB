// ==================== DATA ====================
const STADIUMS = [
  // Canada
  { name: "BMO Field", city: "Toronto", country: "Canada", code: "canada", capacity: "30,000" },
  { name: "BC Place", city: "Vancouver", country: "Canada", code: "canada", capacity: "54,500" },
  // Mexico
  { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", code: "mexico", capacity: "87,523" },
  { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", code: "mexico", capacity: "72,990" },
  { name: "Estadio Akron", city: "Guadalajara", country: "Mexico", code: "mexico", capacity: "46,420" },
  // USA
  { name: "MetLife Stadium", city: "New York/New Jersey", country: "USA", code: "usa", capacity: "82,500" },
  { name: "AT&T Stadium", city: "Arlington, Texas", country: "USA", code: "usa", capacity: "80,000" },
  { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", code: "usa", capacity: "71,000" },
  { name: "SoFi Stadium", city: "Inglewood, California", country: "USA", code: "usa", capacity: "70,240" },
  { name: "NRG Stadium", city: "Houston", country: "USA", code: "usa", capacity: "72,220" },
  { name: "Arrowhead Stadium", city: "Kansas City", country: "USA", code: "usa", capacity: "76,416" },
  { name: "Gillette Stadium", city: "Foxborough, Massachusetts", country: "USA", code: "usa", capacity: "65,878" },
  { name: "Lincoln Financial Field", city: "Philadelphia", country: "USA", code: "usa", capacity: "69,528" },
  { name: "Levi's Stadium", city: "Santa Clara, California", country: "USA", code: "usa", capacity: "75,000" },
  { name: "Lumen Field", city: "Seattle", country: "USA", code: "usa", capacity: "69,000" },
  { name: "Hard Rock Stadium", city: "Miami Gardens, Florida", country: "USA", code: "usa", capacity: "64,450" },
]

const TEAMS = [
  { name: "Brazil", flag: "🇧🇷", titles: "5 World Cups", best: "Final 1994, 2002" },
  { name: "Germany", flag: "🇩🇪", titles: "4 World Cups", best: "Champion 2014" },
  { name: "France", flag: "🇫🇷", titles: "2 World Cups", best: "Champion 2018, 2022" },
  { name: "Argentina", flag: "🇦🇷", titles: "2 World Cups", best: "Champion 2022" },
  { name: "England", flag: "🇬🇧", titles: "1 World Cup", best: "Champion 1966" },
  { name: "Spain", flag: "🇪🇸", titles: "1 World Cup", best: "Champion 2010" },
  { name: "Italy", flag: "🇮🇹", titles: "4 World Cups", best: "Final 2012, 2020" },
  { name: "Netherlands", flag: "🇳🇱", titles: "0 World Cups", best: "Final 1974, 1978, 2010" },
]

const PLAYERS = [
  { name: "Kylian Mbappé", club: "Real Madrid", country: "🇫🇷 France", position: "Forward" },
  { name: "Jude Bellingham", club: "Real Madrid", country: "🇬🇧 England", position: "Midfielder" },
  { name: "Rodri Hernández", club: "Man City", country: "🇪🇸 Spain", position: "Midfielder" },
  { name: "Vinicius Jr", club: "Real Madrid", country: "🇧🇷 Brazil", position: "Forward" },
  { name: "Florian Wirtz", club: "Bayer Leverkusen", country: "🇩🇪 Germany", position: "Forward" },
  { name: "Pedri", club: "Barcelona", country: "🇪🇸 Spain", position: "Midfielder" },
  { name: "Phil Foden", club: "Man City", country: "🇬🇧 England", position: "Midfielder" },
  { name: "Erling Haaland", club: "Man City", country: "🇳🇴 Norway", position: "Forward" },
]

const INNOVATIONS = [
  {
    number: "01",
    title: "48 Teams",
    description: "First time with 48 teams instead of 32, expanding participation across the world",
  },
  {
    number: "02",
    title: "3 Host Nations",
    description: "Historic first tri-nation tournament across Canada, Mexico, and USA",
  },
  {
    number: "03",
    title: "104 Matches",
    description: "More matches than ever before, providing more opportunities for every team",
  },
  {
    number: "04",
    title: "Advanced VAR",
    description: "Enhanced technology for fairer decisions and faster reviews",
  },
  {
    number: "05",
    title: "New Schedule",
    description: "Innovative group format ensuring competitive balance",
  },
  {
    number: "06",
    title: "Expanded Venue",
    description: "16 world-class stadiums across three nations",
  },
]

// ==================== COUNTDOWN TIMER ====================
function updateCountdown() {
  const targetDate = new Date("2026-06-11T00:00:00").getTime()
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    document.getElementById("days").textContent = "0"
    document.getElementById("hours").textContent = "0"
    document.getElementById("minutes").textContent = "0"
    document.getElementById("seconds").textContent = "0"
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById("days").textContent = String(days).padStart(2, "0")
  document.getElementById("hours").textContent = String(hours).padStart(2, "0")
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0")
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0")
}

// Update countdown every second
setInterval(updateCountdown, 1000)
updateCountdown() // Call immediately on load

// ==================== STADIUMS GALLERY ====================
function renderStadiums(filter = "all") {
  const grid = document.getElementById("stadiumsGrid")
  grid.innerHTML = ""

  const filtered = filter === "all" ? STADIUMS : STADIUMS.filter((s) => s.code === filter)

  filtered.forEach((stadium) => {
    const card = document.createElement("div")
    card.className = "stadium-card"
    card.innerHTML = `
            <div class="stadium-image" style="background: linear-gradient(135deg, #0F5E5E, rgba(6, 182, 212, 0.3))"></div>
            <div class="stadium-info">
                <div class="stadium-name">${stadium.name}</div>
                <div class="stadium-city">${stadium.city}</div>
                <span class="stadium-country">${stadium.country}</span>
            </div>
        `
    grid.appendChild(card)
  })
}

// Filter buttons functionality
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
    e.target.classList.add("active")
    renderStadiums(e.target.dataset.filter)
  })
})

// ==================== TEAMS SECTION ====================
function renderTeams() {
  const grid = document.getElementById("teamsGrid")
  grid.innerHTML = ""

  TEAMS.forEach((team) => {
    const card = document.createElement("div")
    card.className = "team-card"
    card.innerHTML = `
            <div class="team-flag">${team.flag}</div>
            <div class="team-name">${team.name}</div>
            <div class="team-stat"><strong>${team.titles}</strong></div>
            <div class="team-stat">${team.best}</div>
        `
    grid.appendChild(card)
  })
}

// ==================== PLAYERS SECTION ====================
function renderPlayers() {
  const grid = document.getElementById("playersGrid")
  grid.innerHTML = ""

  PLAYERS.forEach((player) => {
    const card = document.createElement("div")
    card.className = "player-card"
    card.innerHTML = `
            <div class="player-image" style="background: linear-gradient(135deg, #0F5E5E, rgba(14, 165, 233, 0.3))"></div>
            <div class="player-info">
                <div class="player-name">${player.name}</div>
                <div class="player-club">${player.club}</div>
                <span class="player-country">${player.country}</span>
            </div>
        `
    grid.appendChild(card)
  })
}

// ==================== INNOVATIONS SECTION ====================
function renderInnovations() {
  const grid = document.getElementById("innovationsGrid")
  grid.innerHTML = ""

  INNOVATIONS.forEach((innovation) => {
    const card = document.createElement("div")
    card.className = "innovation-card"
    card.innerHTML = `
            <div class="innovation-number">${innovation.number}</div>
            <div class="innovation-title">${innovation.title}</div>
            <div class="innovation-description">${innovation.description}</div>
        `
    grid.appendChild(card)
  })
}

// ==================== MOBILE MENU ====================
const menuToggle = document.getElementById("menuToggle")
const navbarMenu = document.getElementById("navbarMenu")

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active")
  menuToggle.classList.toggle("active")
})

// Close menu when clicking a link
document.querySelectorAll(".navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active")
    menuToggle.classList.remove("active")
  })
})

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".section, .stadium-card, .team-card, .player-card, .innovation-card").forEach((el) => {
  el.style.opacity = "0"
  observer.observe(el)
})

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  renderStadiums()
  renderTeams()
  renderPlayers()
  renderInnovations()
})
