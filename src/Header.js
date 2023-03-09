import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Header() {

  return (
    <Carousel>
        <Carousel.Item>
             <img 
                src="./images/grandCanyonAyo.jpeg"
                alt="Grand Canyon 2022" 
            />
            <img 
                src='./images/UNCOR.jpeg' 
                alt="UNC OR Staff Thanksgiving 2020" 
            />
              <img 
                src="./images/templeOfTheMoon.jpeg"
                alt="Temple Of The Moon 2022" 
            />
             <img 
                src="./images/glacierBridge.jpeg"
                alt="Glacier National Park 2022" 
            />

            <Carousel.Caption style={{color:"white"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Header