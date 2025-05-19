// src/components/ProductDetails.tsx
import React from "react";
import "./ProductDetails.css";
import { useLocation, useParams } from "react-router-dom";
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
const { state } = useLocation(); 
  const { id } = useParams();
  console.log(0);
  
  return (
    <div className="product-details">
      <div className="product-details__image-container">
        <img src={state.image} alt={state?.title} className="product-details__image" />
      </div>
      <div className="product-details__info">
        <h2 className="product-details__title">{state.title}</h2>
        <p className="product-details__category">Category: {state.category}</p>
        <p className="product-details__description">{state.description}</p>
        <p className="product-details__price">${state.price}</p>
        <button className="product-details__button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
