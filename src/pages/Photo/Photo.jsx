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
  const API_KEY = "8e3792a3-b23c-4f9d-97c2-c1e35ad2df23";

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}?api_key=${API_KEY}`
      );
      setPhoto(response.data);
    };
    fetchPhoto();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`
      );
      setComments(response.data);
    };
    fetchComments();
  }, []);

  while (!photo || !comments) {
    return <div>loading...</div>;
  }

  const commentList = comments.map((comment) => {
    return <Comment comment={comment} key={comment.id} />;
  });

  return (
    <>
      <Header />
      <div className="photo__content">
        <Card photo={photo} isHomePage={false} />
        <Form />
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
