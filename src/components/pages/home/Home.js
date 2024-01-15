import heroImg from "../../../assets/12.jpg"
import Destination from "../../destination/Destination"
import Hero from "../../hero/Hero"
import "./home.css"

const Home = () => {
  return (
    <>
  <Hero
  cName="hero"
  heroImg={heroImg}
  title="Your Journey Your Story"
  text="Choose Your Favorite Destination."
  btnName="Travel Plan"
  url="/"
  btnClass="show"
  />
  <Destination/>
    </>
  )
}

export default Home