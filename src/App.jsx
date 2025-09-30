import MovingLogo from "./sections/MovingLogo"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowCase from "./sections/ShowCase"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ShowCase />
      <MovingLogo />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
    </>
  )
}

export default App