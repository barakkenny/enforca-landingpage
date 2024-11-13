import { Button } from "@/components/ui/button";

const NavbarComponent = () => {
  return (
    <div className="flex items-center justify-between px-24 py-4">
      <h3 className="font-play font-extrabold text-3xl text-main cursor-pointer">
        Enforca
      </h3>
      <ul className="flex items-center gap-5">
        <li className="font-bold text-lg cursor-pointer hover:text-main">For Mentorship</li>
        <li className="font-bold text-lg cursor-pointer hover:text-main">For Job Seekers</li>
      </ul>
      <div className="space-x-4">
        <Button className="py-2 px-6 hover:border-2 hover:border-main text-white bg-main hover:text-blue hover:bg-white hover:text-main">
          Login
        </Button>
        <Button className="py-2 px-6 border-2 border-main text-main bg-white hover:text-white hover:bg-main">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default NavbarComponent;
