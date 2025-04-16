import React from "react";
import bikeImage from "../assets/bike.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="heroId">
      <div className="hero__content">
        <h1 className="hero__title">Велосипед майбутнього</h1>
        <p className="hero__subtitle">
          Легкий. Розумний. Швидкий. Ідеальний байк для міста і пригод.
        </p>
        <button className="hero__btn">Замовити зараз</button>
      </div>
      <div className="hero__image-container">
        <img src={bikeImage} alt="bike" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;
