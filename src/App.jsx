import MovingLogo from "./sections/MovingLogo"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowCase from "./sections/ShowCase"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <ShowCase />
      <MovingLogo />
    </>
  )
}

export default App