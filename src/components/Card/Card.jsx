import "./Card.scss";
import Tag from "../Tag/Tag";
import Like from "../Like/Like";
import timestampToDate from "../../helperFunctions/timestampToDate";
import { useContext } from "react";
import { selectedTagContext } from "../../TagContext";

function Card({ photo, isHomePage, font }) {
  // use selected tag context to read if a tag is selected
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
        {/* include certain fields if card is displayed on home page */}
        {isHomePage && (
          <div className={`card__photographer ${font}`}>
            {photo.photographer}
          </div>
        )}
      </div>
      <div className="card__info">
        <div className="card__tags">{tagList}</div>
        {/* include certain fields if card is displayed on photo page */}
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
