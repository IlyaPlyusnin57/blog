import Navbar from "../components/Navbar/Navbar";

function Home({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Home;
