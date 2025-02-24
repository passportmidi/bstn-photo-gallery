import "./Card.scss";
import Tag from "../Tag/Tag";
import Like from "../Like/Like";
import timestampToDate from "../../helperFunctions/timestampToDate";
import { useContext } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";

function Card({ photo, isHomePage, font }) {
  const selectedTag = isHomePage ? useContext(selectedTagContext) : null;

  const tagList = photo.tags.map((tag) => (
    <Tag value={tag} key={tag} selectedTag={selectedTag} font={font} />
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
          <div className={`card__photographer ${font}`}>
            {photo.photographer}
          </div>
        )}
      </div>
      <div className="card__info">
        <div className="card__tags">{tagList}</div>
        {!isHomePage && (
          <div className="card__footer">
            <div className={`card__footer-likes ${font}`}>
              <Like /> {photo.likes} likes
            </div>
            <div className={`card__footer-photographer ${font}`}>
              Photo by {photo.photographer}
            </div>
            <div className={`card__footer-date ${font}`}>
              {timestampToDate(photo.timestamp)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
