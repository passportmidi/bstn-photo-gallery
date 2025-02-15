import { useState } from "react";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Description />
      <Card />
      <Footer />
    </>
  );
}

export default App;
