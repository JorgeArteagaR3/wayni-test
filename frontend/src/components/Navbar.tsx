import { Link, Outlet, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { cn, getPageName } from "../utils/utils";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <header className="py-4 border-b font-bold grid grid-cols-3 px-4 items-center">
        <Link to="/" className={cn(location.pathname === "/" && "invisible")}>
          <FaArrowLeft />
        </Link>
        <h2>{getPageName(location.pathname)}</h2>
      </header>
      <Outlet />
    </>
  );
}
