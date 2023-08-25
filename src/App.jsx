import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dsa from "./components/DSA/Dsa";
import JavaScript from "./components/JavaScript/JavaScript";

function App() {
  return (
    <Routes>
      <Route
        path="/dsa"
        element={
          <Home>
            <Dsa />
          </Home>
        }
      />
      <Route
        path="/javascript"
        element={
          <Home>
            <JavaScript />
          </Home>
        }
      />
    </Routes>
  );
}

export default App;
