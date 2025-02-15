import "./Footer.scss";
import facebookIcon from "../../assets/images/Facebook.svg";
import xIcon from "../../assets/images/X_twitter.svg";
import instagramIcon from "../../assets/images/Instagram.svg";
import pinterestIcon from "../../assets/images/Pinterest.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="wordmark footer__wordmark">Snaps</h2>

      <ul className="footer__nav">
        <li className="footer__nav-element">
          <a className="footer__nav-link" href="/">
            For photographers
          </a>
        </li>
        <li className="footer__nav-element">
          <a className="footer__nav-link" href="/">
            Hire talent
          </a>
        </li>
        <li className="footer__nav-element">
          <a className="footer__nav-link" href="/">
            Inspiration
          </a>
        </li>
      </ul>

      <ul className="footer__nav">
        <li className="footer__nav-element">
          <a className="footer__nav-link" href="/">
            About
          </a>
        </li>
        <li className="footer__nav-element">
          <a className="footer__nav-link" href="/">
            Careers
          </a>
        </li>
        <li className="footer__nav-element">
          <a className="footer__nav-link" href="/">
            Support
          </a>
        </li>
      </ul>

      <div className="footer__icon-area">
        <img src={facebookIcon}></img>
        <img src={xIcon}></img>
        <img src={instagramIcon}></img>
        <img src={pinterestIcon}></img>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© 2024 Snaps</p>
        <ul className="footer__nav--bottom">
          <li className="footer__nav-element--bottom">
            <a className="footer__nav-link--bottom body-copy" href="/">
              . Terms
            </a>
          </li>
          <li className="footer__nav-element--bottom">
            <a className="footer__nav-link--bottom body-copy" href="/">
              Privacy
            </a>
          </li>
          <li className="footer__nav-element--bottom">
            <a className="footer__nav-link--bottom body-copy" href="/">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
