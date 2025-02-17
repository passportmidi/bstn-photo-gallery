import { useState } from "react";
import "./Header.scss";
import Filter from "../Filter/Filter";

export default function Header({ toggleFunction }) {
  const [hover, setHover] = useState(false);
  return (
    <header className="header">
      <h2 className="wordmark header__wordmark">Snaps</h2>
      <button
        className={`header__cta${hover ? " header__cta--hover" : ""} label`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={toggleFunction}
      >
        Filters <Filter fill={hover ? "white" : "#49675A"} />
      </button>
    </header>
  );
}
