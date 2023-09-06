import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dsa from "./components/DSA/Dsa";
import JavaScript from "./components/JavaScript/JavaScript";
import Welcome from "./components/Welcome/Welcome";
import ShowArticle from "./components/JavaScript/ShowArticle";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home>
            <Welcome />
          </Home>
        }
      />
      <Route
        path="/dsa"
        element={
          <Home>
            <Dsa />
          </Home>
        }
      />

      <Route path="/javascript" element={<Home />}>
        <Route index element={<JavaScript />}></Route>
        <Route path=":articleId" element={<ShowArticle />} />
      </Route>
    </Routes>
  );
}

export default App;
