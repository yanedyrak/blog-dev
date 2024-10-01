import { Cherry } from "lucide-react";
import { headerLinks } from "../shared/constants/HeaderLinks";
import { useLocation } from "react-router-dom";
import { NavbarProfile } from "../entities/NavbarProfile";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed text-white flex min-h-screen flex-col w-64 p-5">
      <Cherry size={40} />
      <div className="my-20 flex flex-grow flex-col justify-between ">
        {headerLinks.map((link) => (
          <a
            href={link.link}
            className={
              pathname === link.link
                ? "flex gap-3 items-center text-2xl font-bold"
                : "flex gap-3 items-center text-2xl "
            }
            key={link.name}
          >
            {pathname === link.link ? link.filledIcon : link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <button className="py-3 text-xl border-none bg-blue-500 rounded-3xl duration-300 hover:brightness-75 mb-6">
        Post
      </button>
      <NavbarProfile />
    </nav>
  );
};
