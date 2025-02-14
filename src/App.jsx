import { useState } from "react";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Description />
      <Footer />
    </>
  );
}

export default App;
