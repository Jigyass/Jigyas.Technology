import React from 'react'
import styles from "./SideBar.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideBar.css'
const SideBar = () => {
  return (
    <div className={styles.sideMain}>
      <div className={styles.ButtonMain}>
        {/* <button className={styles.Sidebtn}>Project1</button>
        <button className={styles.Sidebtn}>Project2</button>
        <button className={styles.Sidebtn}>Project3</button>
        <button className={styles.Sidebtn}>Project4</button>
        <button className={styles.Sidebtn}>Project5</button>
        <button className={styles.Sidebtn}>Project6</button>
        <button className={styles.Sidebtn}>Project7</button>
        <button className={styles.Sidebtn}>Project8</button> */}
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.sideBarMain}>
          <Container fluid >
            <Navbar.Brand href="#">
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 ">
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
                  <Nav.Link href="#action1" className={styles.navText}>
        <div className={styles.Sidebtn}>ComingSoon</div>
                    
                  </Nav.Link>
               
                 
               
                  
                </Nav>
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
    </div>

  )
}

export default SideBar
