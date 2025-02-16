import "./Header.scss";
import Filter from "../Filter/Filter";

export default function Header({ iconFill }) {
  return (
    <header className="header">
      <h2 className="wordmark header__wordmark">Snaps</h2>
      <button className="header__cta label">
        Filters <Filter fill={iconFill} />
      </button>
    </header>
  );
}
