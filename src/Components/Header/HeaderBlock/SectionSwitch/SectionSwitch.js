import "./SectionSwitch.css";
import { NavLink } from "react-router-dom";

export default function SectionSwitch() {
  return (
    <div className="section-switch">
      <NavLink
        to="/"
        className="shopping-router router-link"
        activeclassname="router-active"
      >
        Shopping
      </NavLink>
      <NavLink
        to="/style"
        className="style-router router-link"
        activeclassname="router-active"
      >
        Style
      </NavLink>
    </div>
  );
}
