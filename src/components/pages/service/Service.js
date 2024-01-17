import heroImg from "../../../assets//2.jpg"
import Footer from "../../footer/Footer"
import Hero from "../../hero/Hero"
import Trip from "../../trip/Trip"
import "./service.css"


const Service = () => {
  return (
    <>
      <Hero
  cName="heroAbout"
  heroImg={heroImg}
  title="Best destinations for every season "
  btnClass="showAbout"
  />
  <Trip/>
  <Footer/>
    </>
  )
}

export default Service