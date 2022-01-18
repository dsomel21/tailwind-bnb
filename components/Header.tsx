import Image from "next/image";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-10 shadow-sm p-5 md:px-10 grid grid-cols-3">
      <div className="h-10 relative my-auto bg-red-100">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Start your search"
          className="outline-1 outline-blue-400 text-gray-600 placeholder-gray-400 pl-5 bg-transparent flex-grow py-2"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 text-white rounded-full h-8 p-2 mx-auto" />
      </div>
      <div className="flex text-gray-500 justify-end items-center space-x-2">
        <a href="#" className="hidden lg:inline">
          Become a host
        </a>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex bg-gray-100 rounded-full p-2 space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
