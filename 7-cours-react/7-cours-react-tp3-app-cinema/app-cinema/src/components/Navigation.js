import { NavLink } from "react-router-dom";

const Navigation = () => {
  function activateNavlink(isActive) {
    if (isActive) {
      return "nav-active";
    } else {
      return "";
    }
  }

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => activateNavlink(nav.isActive)}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => activateNavlink(nav.isActive)}
        >
          <li>Favoris</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
