import "./Card.scss";
import placeholderImage from "../../assets/images/Facebook.svg";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={placeholderImage} alt="placeholder" />
        <div className="card__photographer">Yaaaay</div>
      </div>
      <div className="card__tags">
        <p>Placeholder</p>
      </div>
    </div>
  );
}

export default Card;
