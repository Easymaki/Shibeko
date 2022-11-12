import "./SearchBar.css";
import React, { useState } from "react";

export default function SearchBar() {
  const [searchbar, setSearchBar] = useState("searchbar-input");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setSearchBar("searchbar-input_active");
    } else {
      setSearchBar("searchbar-input");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          className={searchbar}
          onClick={updateMenu}
          title="Search..."
        />
      </form>
    </div>
  );
}
