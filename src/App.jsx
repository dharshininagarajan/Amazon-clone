import React from "react";
import Navbar from "./components/Navbar";
import SliderNav from "./components/SliderNav";
import BoxRow from "./components/BoxRow";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";
import Product from "./components/Product";
import ExtraProduct from "./components/ExtraProduct";
import NavSub from "./components/navSub";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavSub />
      <SliderNav />
      <BoxRow />
      <Product />
      <ProductSection />
      <Product />
      <ExtraProduct />
      <Footer />
    </div>
  );
}

export default App;
