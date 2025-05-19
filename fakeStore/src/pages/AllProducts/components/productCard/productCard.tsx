import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div onClick={()=>{
      
      
    }} className="product-card">
      <img src={image} alt={title} className="product-card__image" />
      <h4 className="product-card__title">{title}</h4>
      <p className="product-card__price">${price}</p>
    </div>
  );
};

export default ProductCard;
