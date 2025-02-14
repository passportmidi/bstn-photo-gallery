import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__wordmark">Snaps</h2>
      <ul className="footer__link-list">
        <li className="footer__list-element">
          <a className="footer__link" href="/">
            For photographers
          </a>
        </li>
        <li className="footer__list-element">
          <a className="footer__link" href="/">
            Hire talent
          </a>
        </li>
        <li className="footer__list-element">
          <a className="footer__link" href="/">
            Inspiration
          </a>
        </li>
      </ul>
      <ul className="footer__link-list">
        <li className="footer__list-element">
          <a className="footer__link" href="/">
            About
          </a>
        </li>
        <li className="footer__list-element">
          <a className="footer__link" href="/">
            Careers
          </a>
        </li>
        <li className="footer__list-element">
          <a className="footer__link" href="/">
            Support
          </a>
        </li>
      </ul>
    </footer>
  );
}
