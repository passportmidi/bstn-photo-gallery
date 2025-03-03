import { useState } from "react";
import "./Form.scss";
import axios from "axios";

export default function Form({ photoId, fetchComments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleNameChange = (e) => {
    setName(e.target.value);
    // catches if name is whitespace
    if (!name.trim()) {
      e.target.setCustomValidity("Name cannot be empty");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // catches if comment is whitespace
    if (!comment.trim()) {
      e.target.setCustomValidity("Comment cannot be empty");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    const name = e.target.nameInput.value;
    const comment = e.target.commentInput.value;
    try {
      await axios.post(`${BASE_URL}/photos/${photoId}/comments`, {
        name,
        comment,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        postComment(e);
        fetchComments();
      }}
    >
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
