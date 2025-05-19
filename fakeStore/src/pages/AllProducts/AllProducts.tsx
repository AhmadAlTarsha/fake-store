import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";
import ProductCard from "./components/productCard/productCard";
import "./AllProducts.css"

const ProductsPage: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);

 
  useEffect(() => {
    fetch(`${BASE_URL}/products/categories`)
      .then((res) => res.json())
      .then(setCategories);
  }, []);

 
  useEffect(() => {
    if (selectedCategory) {
      fetch(`${BASE_URL}/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then(setProducts);
    }
  }, [selectedCategory]);

  return (
    <div className="products-page">
      <nav className="products-navbar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
