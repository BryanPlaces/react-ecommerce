import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default LayoutRoot;