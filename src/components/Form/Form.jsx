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

{
  /* <form id="commentForm" class="form">
<div class="form__section">
  <label for="nameInput" class="label form__label">
    {" "}
    Name
  </label>
  <input
    type="text"
    id="nameInput"
    class="form__input form__input-name"
    name="nameInput"
    placeholder="Enter your name"
  />
</div>
<div class="form__section">
  <label for="commentInput" class="label form__label">
    Comment
  </label>
  <textarea
    id="commentInput"
    class="form__input form__input-comment"
    name="commentInput"
    placeholder="Add a new comment"
  ></textarea>
</div>
<button class="button form__button" type="submit">
  Comment
</button>
</form> */
}
