import { useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import logoImg from "../../../assets/images/user-image.png";
import { useDataMember } from "../../../hooks/useDataMember";

const UserPhoto = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { memberList } = useDataMember();
  let navRef = useRef();

  useClickOutside(navRef, () => setIsDropdownOpen(false));

  return (
    <>
      <button
        ref={navRef}
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={logoImg}
          alt="user photo"
        />
      </button>
      <div
        className={`z-50 ${
          isDropdownOpen ? "block" : "hidden"
        } absolute top-12 dropdownz my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            {memberList.length === 0
              ? "Loading..."
              : memberList[20].name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {/* {memberList.length === 0
              ? "Loading..."
              : memberList[20].name.substring(0, 5)}
            @mail.com */}
            Faris@mail.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <ListDropdown>Dashboard</ListDropdown>
          <ListDropdown>Learning</ListDropdown>
          <ListDropdown>Settings</ListDropdown>
          <ListDropdown>Logout</ListDropdown>
        </ul>
      </div>
    </>
  );
};

const ListDropdown = (props) => {
  const { children } = props;
  return (
    <li>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};

export default UserPhoto;
