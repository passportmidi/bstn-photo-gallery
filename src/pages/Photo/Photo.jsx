import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import "./Photo.scss";

function Photo() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const API_KEY = "8e3792a3-b23c-4f9d-97c2-c1e35ad2df23";

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}?api_key=${API_KEY}`
      );
      setPhoto(response.data);
    };
    fetchPhoto();
  }, [photoId]);

  while (!photo) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Header />
      <Card photo={photo} isHomePage={false} />
      <Footer />
    </>
  );
}

export default Photo;
