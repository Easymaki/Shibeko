import "./SearchBar.css";
import React, { useState } from "react";

export default function SearchBar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const clickMenu = () => {
    setIsMenuClicked(true);
  };
  const unClickMenu = () => {
    setIsMenuClicked(false);
  };
  return (
    <div className="searchbar">
      <form>
        {isMenuClicked === false ? (
          <input
            type="text"
            className="searchbar-input"
            onClick={clickMenu}
            title="Search..."
          />
        ) : (
          <input
            type="text"
            className="searchbar-input_active"
            onBlur={unClickMenu}
            title="Search..."
          />
        )}
      </form>
    </div>
  );
}
