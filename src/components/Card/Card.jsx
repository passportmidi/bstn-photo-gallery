import "./Card.scss";
import Tag from "../Tag/Tag";

function Card({ photo }) {
  const tagList = photo.tags.map((tag) => <Tag value={tag} key={tag} />);
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
      <div className="card__tags">{tagList}</div>
    </div>
  );
}

export default Card;
