import React from "react";
import "./sideBar.css";
import { sidebarButtons } from "../../constants/sideBarItem"; // تأكد من المسار حسب مشروعك

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {sidebarButtons.map((btn) => (
        <button key={btn.path} className="sidebar__button">
          {btn.label}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
