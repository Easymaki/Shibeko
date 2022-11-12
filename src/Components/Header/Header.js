import "./Header.css";
import HeaderBlock from "./HeaderBlock/HeaderBlock.js";

export default function Header() {
  return (
    <div className="header">
      <div className="contact-block">
        <div className="contact-block_main">
          <span className="contact-block-txt">Contact us</span>
        </div>
      </div>
      <HeaderBlock />
      <div className="navbar-block"></div>
    </div>
  );
}
