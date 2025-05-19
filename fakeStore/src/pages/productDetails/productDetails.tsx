
import React from "react";
import "./productDetails.css";
import { useLocation } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
};

type ProductDetailsProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart }) => {
  const { state } = useLocation() as { state: Product };

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-image">
          <img src={state.image} alt={state.title} />
        </div>
        <div className="details-info">
          <h1>{state.title}</h1>
          <p className="category">الفئة: {state.category}</p>
          <p className="description">{state.description}</p>
          <p className="price">${state.price}</p>
          <button className="add-to-cart" onClick={() => onAddToCart(state)}>
            Add To Cad
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
