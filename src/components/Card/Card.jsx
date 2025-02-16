import "./Card.scss";
import placeholderImage from "../../assets/images/Photo-00.png";
import Tag from "../Tag/Tag";

function Card() {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={placeholderImage} alt="placeholder" />
        <div className="card__photographer label">Yaaaay</div>
      </div>
      <div className="card__tags">
        <Tag />
        <Tag />
      </div>
    </div>
  );
}

export default Card;
