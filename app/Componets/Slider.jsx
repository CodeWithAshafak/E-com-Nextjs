'use client'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
   <>
   
   <Carousel className='p-5' >
      <Carousel.Item>
       <img src="/c1.jpg" alt="carousel" className='rounded-4xl' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img src="/c2.jpg" alt="carousel" className='rounded-4xl' />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/c3.jpg" alt="carousel" className='rounded-4xl' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default Slider
