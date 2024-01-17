import heroImg from "../../../assets//4.jpg"
import Footer from "../../footer/Footer"
import Form from "../../form/Form"
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
  <Form/>
  <Footer/>
    </>
  )
}

export default Contact