import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container,Row,Col} from 'react-bootstrap'
import '../style/slider.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Slider = () => {
       AOS.init();
  return (
   <>
   <div className='Slider'>
     <Container>

         <Row  id='CardRow'>
       
         <div id='CardRow1'  data-aos="fade-up">
           <img src="https://www.hotelplatinumshravasti.com/wp-content/uploads/2022/06/2787_Review_Us_Digital_Downloads_digital_white_horizontal-removebg-preview-300x118.webp" />
           </div >  
          
            <Col data-aos="fade-up" id='CardCol'  >
            <OwlCarousel   className='owl-theme' center={true} 
            loop margin={1} 
            items={3}
            dots={true}
            autoplay={true}
            smartSpeed={1000}
            responsiveClass={true}
            responsive={
               { 0:{ items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        }
            nav={true}>
            <div className='RvwCard ' >

            <div className="Reviwer">
                   <h4> YOGENDRA12111</h4>
                   <h8> JUNE 5, 2022</h8>
                </div>

                 <div className="RvwDetail">
                 <blockquote className='blockqute'/>
                 <div className="fir">
                 <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
                 <p> I have visited restaurant with my friend had a great stay and have food in Jetvan restaurant, I beleive it's one of the best restaurant in Balrampur and Shravasti area.</p>
                 </div>  
                 </div>
            </div>

            <div className='RvwCard' >

<div className="Reviwer">
       <h4> KABIR B</h4>
       <h8> JUNE 4, 2022</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p> I have stayed there for 10 days during my work visit to Balrampur and Bahraich, I am amazed to see this beautiful property at Shravasti. As a hotelier lived inso many properties across India but never stayed like this property. The lobby has a lot of positive vibes, you sitat work and don't wanna go back to the room at all.

Employees are very professional and take care of you like you are at their homes.

I love the food at Jeevan Restaurant which is huge and the biggest in area, the best part is you just order any breakfast, lunch, or dinner at any time and the chef will cook it for you deliciously.

I am glad to see the services the hotel provides, and the best part is a quick service.

I thank all the restaurant staff, Pradeep Saxena, Birendra (GM), Chef who cook for us delicious food.

Thank you all would stay again and recommend Hotel Platinum to all my friends and family.

Thanks! More</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> UNCLELUEY</h4>
       <h8> JULY 13, 2019
</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p> The hotel is located in middle of nowhere but its definitely an excellent location for pilgrimage! Came here for a night, excellent night and the food here were good! Thankyou for the warmth hospitality! Will definitely come back if I come to Shravasti!</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> POONAMDEE</h4>
       <h8> JULY 13, 2019
</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p> Very comfortable stay, excellent service, friendly staff, good food & very well located . Stayed for 3 weeks and no complains . Special word for chef Tilak sharma , whocooks to make you happy . Thanks all</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> BHASKARDIXIT</h4>
       <h8> JULY 19, 2022

</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p> Nice hotel, Bathroom are clean and bed are so comfortable. Perfect ambiance. Food are teasty and not much spicy spacially Thai and korian food. I never believe that this kindof food we can find in Uttar Pradesh but surprisingly we find in hotel platinum which is situated in very small city.</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> GUIDENOVELHOLIDAY</h4>
       <h8> MARCH 27, 2019

</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p> This hotel is truly amazing hotel, If you are traveling Buddhist sector like Bodhagaya, Lumbini, Kushinagar or any other places like same can not find better hotel then this. Lobbyand restaurants are simply wow. Rooms are so spacious including all amenities. They have separate meditational area in lobby which is so impressive. Music with "Buddham Sharanam Gachhami" make more soulfully .
In one word that this hotel is amazed you.</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> CANDICE629</h4>
       <h8> JULY 18, 2017
</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p> The hotel is located in middle of nowhere but it’s definitely an excellent location for pilgrimage! Came here for a night, excellent night and the food here were good! Thankyou for the warmth hospitality! Will definitely come back if I come to Shravasti!</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> PHAM T
</h4>
       <h8> DECEMBER  13, 2019
</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p>We booked 6 rooms with higher price compare to the website ( 5000 rupees / room)and had bad experience. Water in no 1014 have really bad smell , i cannot even wash my face. Service s not that much good compare with price . The breakfast for 2 drivers was not included even when i book they confirmed will give . just because drives have breakfast same place with us then charge more .</p>
     </div>  
     </div>
</div>

<div className='RvwCard ' >

<div className="Reviwer">
       <h4> KPANYARACHUN</h4>
       <h8> JULY 13, 2019
</h8>
    </div>

     <div className="RvwDetail">
     <blockquote className='blockqute'/>
     <div className="fir">
     <img src="https://www.hotelplatinumshravasti.com/wp-content/plugins/wp-tripadvisor-review-slider/public/partials/imgs/tripadvisor_stars_5.png"/>
     <p>The hotel made me feel like I found an oasis in the middle of nowhere. The hotel is local but manage with standardize with hands on duty manager. The room is clean, all equipments are traveller friendly. The staffs are very helpful and clean. There are spaces for praying and meditation with well decorated. The food is also good. All after a long trip, What else do you need more in Sharvasti?</p>
     </div>  
     </div>
</div>

</OwlCarousel>
            </Col> 
         </Row>

     </Container>
     </div>
   </>
  )
}

export default Slider
