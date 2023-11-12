import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
