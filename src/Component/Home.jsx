import React, { useEffect,useState } from 'react'
import '../style/Home.css'
import Carousal from './Carousal.jsx'
import {Container,Row,Col} from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Card from './Card.jsx'
import Services  from './Services.jsx';
import Slider  from './Slider.jsx'
import Footer from './Footer.jsx';

const Home = () => {


 

  return (
    <div>
      <Carousal />

      <Container  fluid  className="container2" >
     <div className='ContainerPad'>
           <Row className="container2text1"   >
           <h2 data-aos="fade-up" data-aos-duration="500" >Welcome To <br /> Hotel Platinum Shravasti</h2>
            <img data-aos="fade-down" data-aos-duration="500" src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/Divider.webp" />
           </Row>
           
           <Row className="container2text2">
             <Col md={3} sm={12}>
             <p className='FirstLetter'>Hotel Platinum Shravasti is Beautifully spread over 60,000.00 Square feet Situated at Balrampur – Shravasti Highway, Uttar Pradesh India.</p>
             </Col>
             <Col md={6} sm={12}>
             <p className='FirstLetter'>Enter a world that exudes unparalleled elegance, sophistication and luxury. Experience true hospitality inside this stunning hotel with impeccable service and an unrivaled state-of-the-art facility. Designed by one of the best Architects & Interior designers of the Buddhist circuit.</p>
             </Col>
             <Col md={3} sm={12}>
             <p className='FirstLetter'>All the rooms have been aesthetically designed and furnished with ultra-modern facilities of international standard to take you to the next level of luxury.</p>
             </Col>
           </Row>

           <Row id='roW2'>
              <Col sm={12} md={12} lg={4} data-aos="fade-up" data-aos-duration="1000" > 
              <div className='Card' >
                <div className="image">
                <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/online-shopping-1.png" alt="" />
                </div>
               <div className="Cardinfo">
                <h4> Gift Shop</h4>
                <p> Trendy, Luxury and Exclusive Gift Collection. </p>
                </div> 
              </div>
              </Col>

               <Col md={12} sm={12} lg={4} data-aos="fade-up" data-aos-duration="1000" > 
              <div className="Card">
              <div className="image">
              <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/car-rental-1.png" alt="" />
              </div>  
               <div className="Cardinfo">
                <h4> Car Rental</h4>
                <p> Make your local trip enjoyable with Car Rental Service. </p>
                </div> 
              </div>
              </Col>
              
              <Col md={12} sm={12} lg={4}  data-aos="fade-up" data-aos-duration="1000"> 
              <div className="Card">
              <div className="image"> 
              <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/wifi-1.png" alt="" />
               </div>
               <div className="Cardinfo">
                <h4>Free WI-FI</h4>
                <p> High Speed Internet facility for all our customers. </p>
                </div> 
              </div>
              </Col>
           </Row>
         </div>
    </Container>
    <div className="space"></div>
    <div class="bottom-arrow"></div>

    <Container className='gallery' >
      <div className="display1">
     <h2 data-aos="fade-up" data-aos-duration="500">Platinum Gallery </h2>
     <img data-aos="fade-down" data-aos-duration="500" src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/Divider.webp"/>
     </div>
     <div className="display">
       <Card/>
     </div>
    </Container>

     <Services/>

     <Slider/>

     <div className="afterSlider">
      <h2 data-aos="flip-right"  data-aos-duration="1000"  > Follow us @hotel_platinumshravasti</h2>
      <img data-aos="flip-left" data-aos-duration="1000"  src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/Divider.webp" />
     </div>

     <Footer/>

      </div> 
  )
}

export default Home
