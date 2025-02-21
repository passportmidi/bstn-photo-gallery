import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Photo from "./pages/Photo/Photo";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:photoId" element={<Photo />} />
        <Route path="home" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
