import { useState } from "react";
import axios from "axios";
import "./Form.scss";

export default function Form({ onSubmitFunc }) {
  const [name, setName] = useState(localStorage.name || "");
  const [comment, setComment] = useState(localStorage.comment || "");

  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    localStorage.setItem("comment", e.target.value);
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
