// import "./nav.css";
// import API from "../../api/index";
import { NavLink, Route } from "react-router-dom";

function Navigation() {
  const menuItems = ["about", "skills", "resume", "contacts"];

  return (
    <nav className="navigation">
      <ul>
        {menuItems.map((navItem) => (
          <li key={navItem}>
            <a>{navItem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
