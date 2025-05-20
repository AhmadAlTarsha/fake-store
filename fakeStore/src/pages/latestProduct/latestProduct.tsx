// src/components/LatestProductsSlider.tsx
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import "./latestProduct.css";
import { useCart } from "../../context/cartContext";



type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const LatestProductsSlider: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();
  

  useEffect(() => {
    fetch(`${BASE_URL}/products?limit=10`)
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-full-container">
      {products.length > 0 && (
        <div className="slider-full-content">
          <button className="nav-btn full-left" onClick={prevSlide}>
            &lt;
          </button>

          <div className="full-product-view">
            <div className="full-product-image">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].title}
              />
            </div>

            <div className="full-product-details">
              <h2>{products[currentIndex].title}</h2>
              <p className="price">${products[currentIndex].price}</p>
              <button
                className="add-cart-btn"
                onClick={() => addToCart(products[currentIndex])}
              >
                Add To Cart
              </button>
            </div>
          </div>

          <button className="nav-btn full-right" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestProductsSlider;
