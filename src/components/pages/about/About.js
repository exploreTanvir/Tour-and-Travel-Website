import heroImg from "../../../assets//1.jpg"
import Footer from "../../footer/Footer"
import Hero from "../../hero/Hero"
import AboutUs from "./AboutUs"
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
  <AboutUs/>
  <Footer/>
    </>
  )
}

export default About