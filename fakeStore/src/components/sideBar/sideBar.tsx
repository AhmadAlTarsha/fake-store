import React from "react";
import "./sideBar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <button className="sidebar__button"> Latest Products</button>
      <button className="sidebar__button"> My Cart</button>
      <button className="sidebar__button"> All Products</button>
    </aside>
  );
};

export default Sidebar;
