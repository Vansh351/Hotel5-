import React from 'react'
import {Carousel, } from 'react-bootstrap';
import '../style/carousal.css' 

const Carousal = () => {
  return (
    <div className='CarousalDiv1'>
    <Carousel controls={false} pause={false} >
    <Carousel.Item interval={3000} >
      
      <img
        className=" CarImg "
        src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/DSC_7577-copy-scaled.webp"
        alt="First slide"
      />
     
      
    </Carousel.Item>
    

    <Carousel.Item interval={3000}>
   
      <img
        className=" CarImg "
        src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/DSC_7699-scaled.webp"
        alt="Second slide"
      />
  
    </Carousel.Item>

    
  
  <Carousel.Item interval={3000}>
  
      <img
        className=" CarImg "
        src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/DSC_7688-scaled.webp"
        alt="Second slide"
      />
   
    </Carousel.Item>
    
  </Carousel>
  </div>
  )
}

export default Carousal
