import { useState } from "react";
import "./Form.scss";

export default function Form({ onSubmitFunc }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!name.trim()) {
      e.target.setCustomValidity("Name cannot be empty");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    if (!comment.trim()) {
      e.target.setCustomValidity("Comment cannot be empty");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <form className="form" onSubmit={onSubmitFunc}>
      <label className="form__label body-copy">
        Name
        <input
          className="form__input form__input-name body-copy"
          id="nameInput"
          onChange={handleNameChange}
          value={name}
          type="text"
          required
        />
      </label>
      <label className="form__label body-copy">
        Comment
        <textarea
          className="form__input form__input-comment body-copy"
          id="commentInput"
          onChange={handleCommentChange}
          value={comment}
          required
        />
      </label>
      <button className="form__button body-copy" type="submit">
        Submit
      </button>
    </form>
  );
}
