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

  // API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;

  // update when photos change
  useEffect(() => {
    fetchPhotos();
  }, [photos]);

  async function fetchPhotos() {
    try {
      const response = await axios.get(`${BASE_URL}/photos`);
      const filteredPhotos = selectedTag
        ? response.data.filter((photo) => photo.tags.includes(selectedTag))
        : response.data;
      setPhotos(filteredPhotos);
    } catch (e) {
      console.error(e);
    }
  }

  // open and close drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  if (!photos) {
    return <div>loading...</div>;
  }

  // create list of photo cards wrapped in links to photo pages
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
      {/* add context to pass selected tag info to child components */}
      <selectedTagContext.Provider value={selectedTag}>
        <setSelectedTagContext.Provider value={setSelectedTag}>
          <div className="app__body">
            <Drawer className={`drawer${drawerOpen ? " drawer--open" : ""}`} />
            <div className="app__content">
              <Description />
              {/* shrink width of photo cards if drawer is open */}
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
