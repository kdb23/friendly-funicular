import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Header() {

  return (
    <Carousel>
        <Carousel.Item>
             <img 
                src="./images/lakeLouiseCanoe.jpeg"
                alt="Grand Canyon 2022" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
            <img 
                src='./images/UNCOR.jpeg' 
                alt="UNC OR Staff Thanksgiving 2020" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
              <img 
                src="./images/templeOfTheMoon.jpeg"
                alt="Temple Of The Moon 2022" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
             <img 
                src="./images/grandPrismaticSpring.jpeg"
                alt="Glacier National Park 2022" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
             <img 
                src="./images/banffWildflowers.jpeg"
                alt="Bow Valley 2022" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
            <img 
                src="./images/bowLake.jpeg"
                alt="Bow Lake 2022" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
              <img 
                src="./images/delicateArch.jpeg"
                alt="Arches National 2022" 
            />
            </Carousel.Item>
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        <Carousel.Item>
             <img 
                src="./images/theNarrows.jpeg"
                alt="Zion National Park 2022" 
            />
            <Carousel.Caption style={{color:"black"}}>
                <h1> Wonderlust RN To Software Engineer</h1>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Header