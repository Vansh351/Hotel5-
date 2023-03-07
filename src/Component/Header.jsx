import React from 'react'
import {Nav,Alert ,Row,Col,Navbar,Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
       
    <Navbar sticky="top"  bg="light" expand="lg">
      <Container className='NavCont' >
        <Navbar.Brand >
          <Link to='/'> 
          <img className='NavImg' src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/HAT-Logo.webp" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          <Nav.Link style={{ fontWeight:650 }} > <Link className='text-link'  to='/'> Home</Link> </Nav.Link>
          <Nav.Link  style={{ fontWeight:650 }} > <Link className='text-link'  to='/rooms'> Rooms</Link></Nav.Link> 
            <Nav.Link style={{ fontWeight:650 }}>  <Link className='text-link'  to="/location" >  Location </Link></Nav.Link>
            <Nav.Link style={{ fontWeight:650 }}>  <Link className='text-link' to='/dinning' >  Dinning </Link></Nav.Link>
            <Nav.Link style={{ fontWeight:650 }}>  <Link className='text-link' to='/gallery' >  Gallery </Link> </Nav.Link>
            <Nav.Link style={{ fontWeight:650 }}>  <Link className='text-link' to='/service'> Service and Facility </Link> </Nav.Link>
            <Nav.Link style={{ fontWeight:650 }}>  <Link className='text-link' to='/contact' >   Contact </Link></Nav.Link>
            
          {/* </Nav>
          <button  className='btn-load-more btn-Header'>Book Now</button>
          <Nav> */}
          
          </Nav>
          <div id='btn-div'>
          <button  className='  btn-load-more'>Book Now</button>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

    </>
  );
}



export default Header
