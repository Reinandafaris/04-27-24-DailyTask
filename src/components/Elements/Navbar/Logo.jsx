import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Navbar
        </span>
      </div>
    </Link>
  );
};

export default Logo;
