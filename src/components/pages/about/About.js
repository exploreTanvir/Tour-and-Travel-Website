import heroImg from "../../../assets//1.jpg"
import Hero from "../../hero/Hero"
import "./about.css"


const About = () => {
  return (
    <>
       <Hero
  cName="heroAbout"
  heroImg={heroImg}
  title="Top Destinations"
  btnClass="showAbout"
  />
    </>
  )
}

export default About