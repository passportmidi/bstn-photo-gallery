import { useState, useEffect } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Drawer from "../../components/Drawer/Drawer";
import Description from "../../components/Description/Description";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import "./Home.scss";

function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [photos, setPhotos] = useState(null);

  const BASE_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "8e3792a3-b23c-4f9d-97c2-c1e35ad2df23";

  useEffect(() => {
    fetchPhotos();
  }, [photos]);

  async function fetchPhotos() {
    const response = await axios.get(`${BASE_URL}/photos?api_key=${API_KEY}`);
    const filteredPhotos = selectedTag
      ? response.data.filter((photo) => photo.tags.includes(selectedTag))
      : response.data;
    setPhotos(filteredPhotos);
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  while (!photos) {
    return <div>loading...</div>;
  }

  const cardsList = photos.map((photo) => {
    return (
      <Link to={`/photo/${photo.id}`} key={photo.id}>
        <Card photo={photo} isHomePage={true} font="label" />
      </Link>
    );
  });

  return (
    <>
      <Header toggleFunction={toggleDrawer} isHomePage={true} />
      <selectedTagContext.Provider value={selectedTag}>
        <setSelectedTagContext.Provider value={setSelectedTag}>
          <div className="app__body">
            <Drawer className={`drawer${drawerOpen ? " drawer--open" : ""}`} />
            <div className="app__content">
              <Description />
              <div
                className={`app__cards${
                  drawerOpen ? " app__cards--narrow" : ""
                }`}
              >
                {cardsList}
              </div>
            </div>
          </div>
        </setSelectedTagContext.Provider>
      </selectedTagContext.Provider>
      <Footer />
    </>
  );
}

export default Home;
