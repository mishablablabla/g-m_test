import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BikeFeatures from "./components/BikeFeatures";
import OrderForm from "./components/OrderForm";
import "./App.scss";

import "./styles/global.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BikeFeatures />
      <OrderForm />
    </div>
  );
};

export default App;
