import MovingLogo from "./sections/MovingLogo"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowCase from "./sections/ShowCase"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ShowCase />
      <MovingLogo />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App