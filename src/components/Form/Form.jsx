import { useState } from "react";
import axios from "axios";

export default function Form() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form__label">
        Name
        <input
          className="form__input"
          onChange={handleNameChange}
          value={name}
          type="text"
        />
      </label>
      <label className="form__label">
        Comment
        <textarea
          className="form__input"
          onChange={handleCommentChange}
          value={comment}
        />
      </label>
      <button className="form__button" type="submit">
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
