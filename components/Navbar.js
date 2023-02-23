import React, {useState} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-scroll';


const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
    return (
      <>
        <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="about" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)} className="button type2">About</Link>
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


