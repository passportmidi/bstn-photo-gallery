import { useState } from "react";
import { selectedTagContext, setSelectedTagContext } from "../../TagContext";
import Header from "../../components/Header/Header";
import Drawer from "../../components/Drawer/Drawer";
import Description from "../../components/Description/Description";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import photos from "../../data/photos.json";
import "./Home.scss";

function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  const cardsList = filteredPhotos.map((photo) => {
    return <Card photo={photo} key={photo.id} />;
  });

  return (
    <>
      <Header toggleFunction={toggleDrawer} />
      <selectedTagContext.Provider value={selectedTag}>
        <setSelectedTagContext.Provider value={setSelectedTag}>
          <div className="app__body">
            <Drawer className={`drawer${drawerOpen ? " drawer--open" : ""}`} />
            <div className="app__content">
              <Description />
              <div className="app__cards">{cardsList}</div>
            </div>
          </div>
        </setSelectedTagContext.Provider>
      </selectedTagContext.Provider>
      <Footer />
    </>
  );
}

export default Home;
