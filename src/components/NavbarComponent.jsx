import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-between lg:px-16 xl:px-24 md:px-12 sm:px-16 xxs:px-4 xs:px-8 py-14 py-4 ">
      <h3 className="font-play font-extrabold text-3xl text-main cursor-pointer">
        Enforca
      </h3>
      <ul className="flex items-center gap-5 xxs:hidden md:flex">
        <li className="font-bold text-lg cursor-pointer hover:text-main">
          For Mentorship
        </li>
        <li className="font-bold text-lg cursor-pointer hover:text-main">
          For Job Seekers
        </li>
      </ul>
      <div className="space-x-4 xxs:hidden md:flex">
        <Button className="py-2 px-6 hover:border-2 hover:border-main text-white bg-main hover:text-blue hover:bg-white hover:text-main">
          Login
        </Button>
        <Button className="py-2 px-6 border-2 border-main text-main bg-white hover:text-white hover:bg-main">
          Sign up
        </Button>
      </div>

      <div className="xxs:block md:hidden text-3xl mt-2">
        <IoMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 z-50 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 `}
        >
          <ul className="pt-8  space-y-8 xxs:block md:hidden cursor-pointer">
            <li className="hover:bg-main px-5 py-2">For Mentorship</li>
            <li className="hover:bg-main px-5 py-2">For Job Seekers</li>
            <li className="hover:bg-main px-5 py-2">Login</li>
            <li className="hover:bg-main px-5 py-2">Sign Up</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
