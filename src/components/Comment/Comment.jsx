import timestampToDate from "../../helperFunctions/timestampToDate";

export default function Comment({ comment }) {
  return (
    <div className="comment__body">
      <div className="comment__header">
        <p className="comment__user">{comment.name}</p>
        <p className="comment__date">{timestampToDate(comment.timestamp)}</p>
      </div>
      <p className="comment__content">{comment.comment}</p>
    </div>
  );
}
