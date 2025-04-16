import React from "react";
import "./BikeFeatures.scss";

const BikeFeatures = () => {
  return (
    <section id="features" className="features">
      <h2>Характеристики велосипеда</h2>
      <div className="features__list">
        <div className="features__item">
          <h3>Легка рама</h3>
          <p>
            Виготовлена з алюмінієвого сплаву для кращої маневреності та
            міцності.
          </p>
        </div>
        <div className="features__item">
          <h3>Підвіска</h3>
          <p>
            Повністю амортизована підвіска для комфортної їзди по нерівних
            дорогах.
          </p>
        </div>
        <div className="features__item">
          <h3>Диски</h3>
          <p>
            Диски забезпечують відмінне зчеплення і гальмування в будь-яких
            умовах.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BikeFeatures;
