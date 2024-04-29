import { useRef, useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import UserPhoto from "./UserPhoto";
import useClickOutside from "../../../hooks/useClickOutside";

const Navbar = () => {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  let hamRef = useRef();

  const handleNavMobile = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  useClickOutside(hamRef, () => setIsNavMobileOpen(false));

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <UserPhoto />
          <Hamburger hamRef={hamRef} onClick={handleNavMobile} />
        </div>

        <NavMobile isNavMobileOpen={isNavMobileOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
