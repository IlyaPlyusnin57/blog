import Navbar from "../components/Navbar/Navbar";
import "./Home.scss";

function Home({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Home;
