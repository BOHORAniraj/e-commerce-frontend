import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./Slideimage.css"

const Slideimage = () => {
    return (
        <div>
            <Carousel infiniteloop autoplay infiniteLoop>
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
            </Carousel>
            
        </div>
    )
}
export default Slideimage;