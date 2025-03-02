import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Comment from "../../components/Comment/Comment";
import "./Photo.scss";

export default function Photo() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchPhoto();
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchPhoto() {
    try {
      const response = await axios.get(`${BASE_URL}/photos/${photoId}`);
      setPhoto(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchComments() {
    try {
      const response = await axios.get(
        `${BASE_URL}/photos/${photoId}/comments`
      );
      const sortedComments = response.data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      setComments(sortedComments);
    } catch (e) {
      console.error(e);
    }
  }

  async function postComment(e) {
    e.preventDefault();
    const name = e.target.nameInput.value;
    const comment = e.target.commentInput.value;
    try {
      await axios.post(`${BASE_URL}/photos/${photoId}/comments`, {
        name,
        comment,
      });
      fetchComments();
    } catch (e) {
      console.error(e);
    }
  }

  if (!photo || !comments) {
    return <div>loading...</div>;
  }

  const commentList = comments.map((comment) => {
    return <Comment comment={comment} key={comment.id} />;
  });

  return (
    <>
      <Header />
      <div className="photo__content">
        <Card photo={photo} isHomePage={false} font="body-copy" />
        <Form onSubmitFunc={postComment} />
        <div className="photo__comments">
          <div className="photo__comments-label body-copy">
            {commentList.length}{" "}
            {commentList.length === 1 ? "Comment" : "Comments"}
          </div>
          {commentList}
        </div>
      </div>
      <Footer />
    </>
  );
}
