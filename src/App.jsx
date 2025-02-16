import { useState } from "react";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import photos from "./data/photos.json";
import "./App.scss";

function App() {
  const cardsList = photos.map((photo) => {
    return <Card photo={photo} key={photo.id} />;
  });

  return (
    <>
      <Header />
      <Description />
      {cardsList}
      <Footer />
    </>
  );
}

export default App;
