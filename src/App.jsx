import { useState } from "react";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Description from "./components/Description/Description";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import photos from "./data/photos.json";
import "./App.scss";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("Hi there");
    setDrawerOpen(!drawerOpen);
  };

  const cardsList = photos.map((photo) => {
    return <Card photo={photo} key={photo.id} />;
  });

  return (
    <>
      <Header toggleFunction={toggleDrawer} />
      <div className="app__body">
        <Drawer className={`drawer${drawerOpen ? " drawer--open" : ""}`} />
        <div className="app__content">
          <Description />
          <div className="app__cards">{cardsList}</div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
