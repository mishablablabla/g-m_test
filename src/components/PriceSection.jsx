import React from "react";
import "./PriceSection.scss";

const PriceSection = () => {
  return (
    <section className="price">
      <h2>Ціна</h2>
      <p className="price__amount">
        від <span>1299€</span>
      </p>
      <p className="price__note">Безкоштовна доставка по всій Європі</p>
    </section>
  );
};

export default PriceSection;
