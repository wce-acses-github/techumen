import { Outlet } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";

function Layout() {
  return (
    <div className="layout bg-black min-h-screen text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
