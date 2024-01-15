import heroImg from "../../../assets//4.jpg"
import Hero from "../../hero/Hero"
import "./contact.css"


const Contact = () => {
  return (
    <>
       <Hero
  cName="heroAbout"
  heroImg={heroImg}
  title="Best destinations for every season "
  btnClass="showAbout"
  />
    </>
  )
}

export default Contact