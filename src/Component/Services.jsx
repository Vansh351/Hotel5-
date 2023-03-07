import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "../style/Services.css"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
      
  AOS.init();
 
  return (
   <Container className='Service' >
     <Row>
         <Col xs={12} sm={12} md={6}>
              <div className="container1"> 
                 <div className="heading1">
                    <h2 data-aos="fade-up">Our Services </h2>
                    <img data-aos="fade-right" src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/Divider.webp" />
                 </div>

                 <div className="heading2" data-aos="fade-right">
                 <p>All the rooms have been aesthetically designed and furnished with ultra modern facilities of international standard to take you to the next level of luxury. The choice of rooms spells class combined with comfort It also consists 185 covers sitting space in a huge & modern furnished Grand Restaurant with full comfort having multi-cuisine food covering all Nationalities with 02 Buffet counters situated on the ground floor</p>
                 </div>

                
                 <Row className="heading3Row1 heading3"> 
                    {/* <div className="heading3firstDiv"> */}
                    <Col xs={12} sm={4} data-aos="fade-up">
                     <div className="serveCard">
                      <div className="image">
                        <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/food-service-3-1.png" />
                      </div>
                      <h4>Room Service </h4>
                      </div>
                      </Col> 

                      <Col xs={12} sm={4}   data-aos="fade-up">
                      <div className="serveCard">
                      <div className="image">
                        <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/dining-table-1-1.png" />
                        </div>
                        <h4>Dining Area</h4>
                        </div>
                      </Col> 

                      <Col xs={12} sm={4 } data-aos="fade-up">
                      <div className="serveCard">
                      <div className="image">
                       <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/meditation-1.png" />
                      </div>
                        <h4>Meditation Center</h4>   
                        </div>                   
                      </Col>   

                      {/* </div>  */}
                  </Row>
                  <Row className="heading3Row2 heading3">
                    
                      {/* <div className="heading3SecondDiv"> */}
                      <Col xs={12} sm={4 } data-aos="fade-up" >
                     <div className="serveCard serveCardPark">
                      <div className="image">
                        <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/parking-1-1.png" />
                      </div>
                      <h4>Parking Space </h4>
                      </div>
                      </Col> 

                      <Col xs={12} sm={4 } data-aos="fade-up" >
                      <div className="serveCard">
                      <div className="image">
                        <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/meeting-room-2.png" />
                        </div>
                        <h4>Conferance Room</h4>
                        </div>
                      </Col> 

                      <Col xs={12} sm={4}   data-aos="fade-up">
                      <div className="serveCard">
                      <div className="image">
                       <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/decoration-1.png" />
                      </div>
                        <h4>Party Lawn</h4>   
                        </div>                   
                      </Col>   
                      {/* </div>  */}
                  </Row>
                 </div>
               
         </Col>
         <Col  md={6} className="servImage " data-aos="fade-up">                 
                     <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/DSC_8565-scaled.webp"/>
         </Col>
      </Row>     
   </Container>
  )
}

export default Services
