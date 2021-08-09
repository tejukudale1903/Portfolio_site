import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import {Link} from 'react-scroll';

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav className="NavbarItems">
          
            <img className="header_logo" src="new_header_logo.jpg" alt="Header"></img>
          
          <h3 className="navbar_logo">Tejashree </h3>
          <h3 className="navbar_logo2">Kudale</h3>
          {/* <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div> 
           <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul> */}
          <div className="nav-menu">
 <div >
         <a href="#" className="nav" className="nav-links"> <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></a>
         <a href="#" className="nav" className="nav-links"> <Link  to="about" spy={true} smooth={true}>About</Link></a>
          <a href="#" className="nav" className="nav-links"><Link  to="skills" spy={true} smooth={true}>Skills</Link></a>
          <a href="#" className="nav" className="nav-links"><Link  to="project" spy={true} smooth={true}>Project</Link></a>
         <a href="#" className="nav" className="nav-links"><Link  to="resume" spy={true} smooth={true}>Resume</Link></a>
         <a href="#" className="nav" className="nav-links"><Link  to="contact" spy={true} smooth={true}>Contact</Link></a>
           
         </div>
         </div>

        </nav>
      </div>
    );
  }
}

export default Navbar;
