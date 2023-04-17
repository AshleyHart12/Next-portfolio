import React, {useState, useEffect} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll';


const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     let nav = document.querySelector('.navbar');
  //     if(window.scrollY > 150) {
  //       nav.style.backgroundColor = "white";
  //       console.log('scroll')
  //     } else {
  //       nav.style.backgroundColorm= "none";
  //     }
  //   })
  // }, [])
  
    return (
      <>
      {/* <div class="navbar">
        <div class="circle"></div>
        <ul class="nav-list">
          <a href='about' spy={true} smooth={true} duration={300}><li>Home</li></a>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div> */}
        <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a  href="#about" onClick={() => setExpanded(false)} className="button type2">About</a>
              <a href="#experience" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">Experience</a>
              <a href="#projects" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">Projects</a>
              <a href="#contact" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">Contact</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}

export default Navigation;


