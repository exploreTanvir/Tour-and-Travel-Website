import { Menu } from "../Menu"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
        <nav className="navbar">
            <h1 className="navbarLogo">Logo</h1>
            <ul className="navMenu">
                {Menu.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a>
                            </li>
                    )
                })}
                     <button> Sing Up</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar