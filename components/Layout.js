import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
