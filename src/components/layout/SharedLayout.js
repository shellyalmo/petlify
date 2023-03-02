import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
// import Alert from './Alert';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <Alert /> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default SharedLayout;
