import Navbar from "../components/Navbar/Navbar";
import "./Home.scss";
import { Outlet } from "react-router-dom";

function Home({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
    </>
  );
}

export default Home;
