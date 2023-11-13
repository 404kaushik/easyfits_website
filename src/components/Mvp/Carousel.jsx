
import React, {useState} from "react";
import img1 from "/src/assets/mvp/carousel/hour glass shape.png";
import img2 from "/src/assets/mvp/carousel/inverted triangle shape.png";
import img3 from "/src/assets/mvp/carousel/retangle shape.png";
import img4 from "/src/assets/mvp/carousel/round shape.png";
import img5 from "/src/assets/mvp/carousel/triangle shape.png";
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";

export const Carousel = () => {
    const CarouselData = [
      {
        image: img1,
      },
      {
        image: img2,
      },
      {
        image: img3,
      },
      {
        image: img4,
      },
      {
        image: img5,
      },
    ];

    const [current, setCurrent] = useState(0)
    const length = CarouselData.length
    const nextSlide = () => {
      setCurrent(current === length-1 ? 0: current + 1)
    };
    const prevSlide = () => {
      setCurrent(current === 0 ? length-1 : current - 1)
    };


    return(
      <section className="carousel">
      <GoTriangleLeft className="left-arrow" onClick={prevSlide} />
      <GoTriangleRight className="right-arrow" onClick={nextSlide} />
         {CarouselData.map((slide, index) => {
        return(
         <div className={index === current ? 'slide active' : 'slide'} key={index} >
         {index === current && ( <img src={slide.image} alt="body type" className="carouselImage"/>)}
        
         </div> 
        )
        
         
      })}
      </section>

    )
    } 