import "./Comment.scss";
import timestampToDate from "../../helperFunctions/timestampToDate";

export default function Comment({ comment }) {
  return (
    <div className="comment__body">
      <div className="comment__header">
        <p className="comment__user label">{comment.name}</p>
        <p className="comment__date label">
          {/* convert timestamp to date before displaying */}
          {timestampToDate(comment.timestamp)}
        </p>
      </div>
      <p className="comment__content body-copy">{comment.comment}</p>
    </div>
  );
}
