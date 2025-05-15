import { Navbar } from "../components/Navbar"
import { MainBanner } from "../components/MainBanner"
import { LineUp } from "../components/LineUp"

export const metadata = {
  title: "Electro-events",
  description: "Plateforme d'événements électro en Suisse",
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <LineUp />
    </>
  )
}
