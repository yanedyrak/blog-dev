import { X } from "lucide-react";
import { headerLinks } from "../shared/constants/HeaderLinks";
import { Link, useLocation } from "react-router-dom";
import { NavbarProfile } from "../entities/NavbarProfile";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed text-white flex min-h-screen flex-col w-64 p-5">
      <X fill="white" size={50} />
      <div className="flex flex-grow flex-col justify-between">
        <div className="py-7 flex flex-col gap-[1.5vw]">
          {headerLinks.map((link) => (
            <Link
              to={link.link}
              className={
                pathname === link.link
                  ? "flex gap-7 items-center text-xl font-bold tracking-wide"
                  : "flex gap-7 items-center text-xl tracking-wide"
              }
              key={link.name}
            >
              {pathname === link.link ? link.filledIcon : link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          <button className="py-2 text-xl border-none bg-blue-500 rounded-3xl duration-300 hover:brightness-75 mt-8">
            Post
          </button>
        </div>

        <NavbarProfile />
      </div>
    </nav>
  );
};
