import { Outlet } from "react-router-dom";
import Nav from "../components/UI/sections/Navbar/Nav";

import Footer from "../components/UI/sections/Footer";


function Root() {


  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root