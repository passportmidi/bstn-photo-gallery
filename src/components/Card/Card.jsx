import "./Card.scss";
import Tag from "../Tag/Tag";
import { useContext } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

function Card({ photo }) {
  const selectedTag = useContext(selectedTagContext);

  const tagList = photo.tags.map((tag) => (
    <Tag value={tag} key={tag} selectedTag={selectedTag} />
  ));

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
