import "./hero.css"

const Hero = (props) => {
  return (
    <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg}/>
        <div className="heroText">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnName}</a>
        </div>
    </div>
  )
}

export default Hero