import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
