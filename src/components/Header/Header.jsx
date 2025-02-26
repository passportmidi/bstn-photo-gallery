import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Filter from "../Filter/Filter";
import Arrow from "../Arrow/Arrow";

export default function Header({ toggleFunction, isHomePage }) {
  const [hover, setHover] = useState(false);
  return (
    <header className="header">
      <Link to="/"><h2 className="wordmark header__wordmark">Snaps</h2></Link>
      {isHomePage ? (
        <button
          className={`header__cta${hover ? " header__cta--hover" : ""} label`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={toggleFunction}
        >
          Filters <Filter fill={hover ? "white" : "#49675A"} />
        </button>
      ) : (
        <Link to="/">
          <div className="header__link">
            <Arrow />
            <p className="header__link-text heading">Home</p>
          </div>
        </Link>
      )}
    </header>
  );
}
