import "./Card.scss";
import Tag from "../Tag/Tag";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

function Card({ photo, onClickFunction }) {
  const selectedTag = useContext(selectedTagContext);
  const tagList = photo.tags.map((tag) => (
    <Tag value={tag} key={tag} selectedTag={selectedTag} />
  ));
  return (
    <Link to={`/photo/${photo.id}`}>
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
    </Link>
  );
}

export default Card;
