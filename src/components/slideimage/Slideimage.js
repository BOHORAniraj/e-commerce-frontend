import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"

import {Carousel} from 'react-bootstrap'
import "./Slideimage.css"

const Slideimage = () => {
    return (
        <div className="image">
            {/* <Carousel infiniteloop autoplay>
                <div className="image">
                    <img src = "./1.jpg" alt = "mobile" />
                </div>
                <div className="image">
                    <img src = "./2.jpg" alt = "mobile" />
                </div>
                <div className="image">
                    <img src = "./3.jpg" alt = "mobile" />
                </div>
                <div className="image">
                    <img src = "./4.jpg" alt = "mobile" />
                </div>
                <div className="image">
                    <img src = "./5.jpg" alt = "mobile" />
                </div>
            </Carousel> */}
            
            <Carousel>
  <Carousel.Item interval={1000} >
    <img
      className="slide-img"
      src="./1a.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="slide-img"
      src="./2a.jpg"
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="slide-img"
      src="./3a.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={500}>
    <img
      className="slide-img"
      src="./4a.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="slide-img"
      src="./5a.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
        </div>
    )
}
export default Slideimage;