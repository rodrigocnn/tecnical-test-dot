import React from 'react'
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageTest from './../../images/slider.jpg'



const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Slider(){
    return (
   
      <Carousel 
        arrows={false}
        infinite
        showDots
        centerMode={false}
        className="slider"
        responsive={responsive}>
      

        <img className="img-fluid" alt="news" src={ImageTest}/>
        <img className="img-fluid" alt="news" src={ImageTest}/>
        <img className="img-fluid" alt="news" src={ImageTest}/>
              

      </Carousel>

    )
}

export default Slider