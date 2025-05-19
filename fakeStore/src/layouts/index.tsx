import React from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sideBar/sideBar";
import Footer from "../components/footer/footer";
import "./layout.css";
import ProductsPage from "../pages/AllProducts/AllProducts";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
