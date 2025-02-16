import "./Header.scss";
import Filter from "../Filter/Filter";

export default function Header() {
  return (
    <header className="header">
      <h2 className="wordmark header__wordmark">Snaps</h2>
      <button>
        Filters <Filter fill="#1E6655" />
      </button>
    </header>
  );
}
