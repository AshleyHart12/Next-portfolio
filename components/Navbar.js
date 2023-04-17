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
        <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='about' spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">About</Link>
              <Link to="experience" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">Experience</Link>
              <Link to="projects" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">Projects</Link>
              <Link to="contact" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}

export default Navigation;


