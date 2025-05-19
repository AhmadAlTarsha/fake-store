import React from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sideBar/sideBar";
import Footer from "../components/footer/footer";
import './layout.css';
import ProductsPage from "../pages/AllProducts/AllProducts";
const Main = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
         <ProductsPage/>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
