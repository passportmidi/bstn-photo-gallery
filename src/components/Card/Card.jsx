import "./Card.scss";
import Tag from "../Tag/Tag";

function Card({ photo }) {
  return (
    <div className="card">
      <div className="card__content">
        <img
          className="card__image"
          src={photo.photo}
          alt={photo.photoDescription}
        />
        <div className="card__photographer label">{photo.photographer}</div>
      </div>
      <div className="card__tags">
        <Tag />
        <Tag />
      </div>
    </div>
  );
}

export default Card;
