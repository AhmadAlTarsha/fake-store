import React from "react";
import "./sideBar.css";
import { sidebarButtons } from "../../constants/sideBarItem"; // تأكد من المسار حسب مشروعك
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      {sidebarButtons.map((btn) => (
        <button
          onClick={() => {
            navigate(btn.path);
          }}
          key={btn.path}
          className="sidebar__button"
        >
          {btn.label}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
