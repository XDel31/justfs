import React from "react";
import { NavLink } from "react-router-dom";

function navDrawActivate(isActive) {
  if (isActive) {
    return "nav-active";
  }
  return "";
}

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => navDrawActivate(nav.isActive)}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => navDrawActivate(nav.isActive)}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
