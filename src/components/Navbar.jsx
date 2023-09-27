import {Link} from "react-router-dom"
const Navbar=()=>{
    return <div>
        <nav id="nav-menu" >
         <ul style={{display:"flex", justifyContent:"space-around"}}>
            <li><a className="nav-link home" href="#home">Home</a></li>
            <li><a className="nav-link about" href="#about">About</a></li>
            <li><a className="nav-link skills" href="#skills">Skills</a></li>
            <li><a className="nav-link projects" href="#projects">Projects</a></li>
            <li><a className="nav-link contact" href="#contact">Contact</a></li>
         </ul>
      </nav>
    </div>
}

export {Navbar}