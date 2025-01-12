import React from "react";
import chefLogo from "../../assets/chef-icon.png";

const Header = () => {
  return (
    <header className="recipe-header">
      <img src={chefLogo} />
      <h1>Chef Recipe</h1>
    </header>
  );
};

export default Header;
