import "./HeaderBlock.css";

import logo from "../../Images/Logo/shibeko-logo.svg";
import SectionSwitch from "./SectionSwitch/SectionSwitch.js";
import SearchBar from "./SearchBar/SearchBar";

export default function HeaderBlock() {
  return (
    <div className="header-block">
      <img src={logo} alt="" className="logo" />
      <SectionSwitch />
      <SearchBar />
      <div>Cart</div>
    </div>
  );
}
