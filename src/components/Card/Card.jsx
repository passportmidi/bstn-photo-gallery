import "./Card.scss";
import placeholderImage from "../../assets/images/Photo-00.png";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={placeholderImage} alt="placeholder" />
        <div className="card__photographer label">Yaaaay</div>
      </div>
      <div className="card__tags label">
        <p>Placeholder</p>
      </div>
    </div>
  );
}

export default Card;
