import { Cherry } from "lucide-react";
import { headerLinks } from "../shared/constants/HeaderLinks";
import { Link, useLocation } from "react-router-dom";
import { NavbarProfile } from "../entities/NavbarProfile";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed text-white flex min-h-screen flex-col w-64 p-5 border-r-[1px] border-white border-opacity-30">
      <Cherry size={30} />
      <div className="py-7 flex flex-grow flex-col gap-6">
        {headerLinks.map((link) => (
          <Link
            to={link.link}
            className={
              pathname === link.link
                ? "flex gap-5 items-center text-xl font-bold"
                : "flex gap-5 items-center text-xl "
            }
            key={link.name}
          >
            {pathname === link.link ? link.filledIcon : link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <button className="py-3 text-xl border-none bg-blue-500 rounded-3xl duration-300 hover:brightness-75 mb-10">
        Post
      </button>
      <NavbarProfile />
    </nav>
  );
};
