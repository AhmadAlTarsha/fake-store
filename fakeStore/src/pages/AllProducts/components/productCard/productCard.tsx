import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

type Props = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const ProductCard: React.FC<Props> = ({ id, title, image, price }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() =>
        navigate(`/productDetails`, {
          state: { id, title, image, price },
        })
      }
    >
      <img src={image} alt={title} className="product-card__image" />
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__price">${price}</p>
    </div>
  );
};

export default ProductCard;
