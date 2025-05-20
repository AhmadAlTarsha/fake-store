
import React from "react";
import "./Header.css";

type HeaderProps = {
  userName?: string;
};

const Header: React.FC<HeaderProps> = ({ userName = "Guest" }) => {
  return (
    <header className="header">
      <div className="header__logo">🛒 FakeStore</div>
      <div className="header__welcome">Welcome, {userName}!</div>
    </header>
  );
};

export default Header;
