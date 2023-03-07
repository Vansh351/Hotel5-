import React, {useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import '../style/Card.css'
import {Col,Row} from 'react-bootstrap'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css'

// https://api.unsplash.com/search/photos?page=1&query=hotel&client_id=-a4P96Ube7S2xtK9O2sZrIeisIYvIYwVrraceObgE7Y
// https://reqres.in/api/users?per_page=${perPage}&page=${page}
const Card = () => {
   AOS.init();
   const [list,setList]= useState([]);
   const perPage = 6;
   const [page,setPage]= useState(1);
   const [totalPages, settotalPages]= useState(1);
   const [loading, setLoading] = useState(false);

   useEffect(()=>{
         setLoading(true);
         const fetchImge= async()=>{
            const {data} = await axios.get(`https://api.unsplash.com/search/photos?per_page=${perPage}&page=${totalPages}&query=hotel&client_id=-a4P96Ube7S2xtK9O2sZrIeisIYvIYwVrraceObgE7Y`);
            setList([...list, ...data.results]); 
            settotalPages(data.total_pages);
              console.log(data); 
              setLoading(false);       
        } 
         fetchImge();  
        
   },[page]);

   AOS.init();
  return (<>
    <Row className='CardRow'>
        { list.map((i)=>{     
          return <Col  sm={12} md={6} lg={4} key={i.id} className="PageCard">                     
               <img  data-aos="zoom-in" data-aos-duration="1000" src={i.urls.regular}/> 
                </Col> 
        })}
    </Row>
    { totalPages!= page && <button  data-aos="fade-up"  className='btn-load-more' onClick={()=> setPage(page +1)} >{loading ? 'Loading...' : 'Load More'}</button> }
     </>
  )
}

export default Card
