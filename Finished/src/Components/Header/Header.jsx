import React from 'react'
import styles from "./Header.module.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PDf from "../../Images/Resume_2024.pdf"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../../Images/logo.png"
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import "./Header.css"

const Header =  () => {
    const handleClick = () => {
        console.log("Email icon clicked");
        window.location.href = 'mailto:engineer@icloud.com';
      };
      const handleCallClick = () => {
        console.log("Call icon clicked");
        window.location.href = 'tel:+13108674475';
      };
      const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + PDf;
    
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume_2024.pdf';
        link.click();
      };
     
  return (
    <div>
  {[ 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.Headermain}>
          <Container fluid className={styles.headCont}>
            <Navbar.Brand href="#">
                <div className={styles.logoMain}>
                    <img src={Logo} alt="" className={styles.logoImg}/>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className={styles.navText}>Jigyas Sharma</Nav.Link>
                  <Nav.Link   target='_blank' style={{alignSelf:'center'}}>
                    <AiOutlineMail  onClick={handleClick}  className={styles.icon}/>
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={handleCallClick}  style={{alignSelf:'center'}}>
                    <IoCallOutline className={styles.icon}/>
                  </Nav.Link>
                  <Nav.Link href="#action2" onClick={handleCallClick} >
                    <button   onClick={handleDownload} className={styles.btnHome}>Dowload Resume</button>
                  </Nav.Link>
                  <Nav.Link target='_blank' href="https://github.com/Jigyass" style={{alignSelf:'center'}}>
                    <FaGithub  className={styles.icon} />
                  </Nav.Link>
                  <Nav.Link target='_blank' href="https://calendly.com/jigyass" style={{alignSelf:'center'}}>
                    <SlCalender className={styles.icon}/>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </div>
  )
}

export default Header