import React from "react";
import { Carousel } from "antd";
import image1 from "../assets/background-1.png";
import "../index.css";

const CarouselContent = () => (
  <Carousel className="carouselImages" autoplay>
    <figure>
      <img src={image1} alt="Imagem 1" />
    </figure>
    <figure>
      <img src={image1} alt="Imagem 1" />
    </figure>
    <figure>
      <img src={image1} alt="Imagem 1" />
    </figure>
  </Carousel>
);
export default CarouselContent;
