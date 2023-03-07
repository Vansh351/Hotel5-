import React from 'react'
import '../style/Footer.css'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <Container fluid className='FooterContainer'>
        <Row>
            <Col className='Colum1'>
             <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/HAT-Logo-300x170.webp"/>
              <a href=' https://goo.gl/maps/FLBSBzgt9orxV8NJ7'> Chakar Bhandar, Shravasti, Balrampur - Bahraich Highway, Uttar Pradesh - 271805</a>
             <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/HAT-Logo.png"  />
             <h2> Get In Touch</h2>     
             <div className='solid' />
            </Col>
        </Row>

        <Row className='Row2'>
            <Col xs={12} sm={12} md={6}   className='Colum2'>
            
              <h5>Hotel Platinum Shravasti Copyright@2021 </h5>

             </Col>

           <Col xs={12} sm={12} md={6} className='Colum3'>
        
             <h5> Design & Developed By Fielmente </h5>
              </Col>
        </Row>
    </Container>
    </>
  )
}


export default Footer
