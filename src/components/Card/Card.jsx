import "./Card.scss";
import Tag from "../Tag/Tag";
import Like from "../Like/Like";
import { useContext } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

function Card({ photo, isHomePage }) {
  function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(date);
    return formattedDate;
  }

  const selectedTag = isHomePage ? useContext(selectedTagContext) : null;

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
        {isHomePage && (
          <div className="card__photographer label">{photo.photographer}</div>
        )}
      </div>
      <div className="card__tags">{tagList}</div>
      {isHomePage && (
        <div className="card__footer">
          <div className="card__footer-likes label">
            <Like /> {photo.likes} likes
          </div>
          <div className="card__footer-date label">
            {timestampToDate(photo.timestamp)}
          </div>
          <div className="card__footer-photograti pher label">
            Photo by {photo.photographer}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
