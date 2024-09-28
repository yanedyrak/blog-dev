import { PiSlackLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="max-w-[85%] mx-auto flex justify-between items-center py-5">
      <Link to="/">
        <PiSlackLogoBold
          size={60}
          fill="#3b82f6"
          className="rotate-45 duration-300 hover:fill-white"
        />
      </Link>
      <div className="flex gap-5">
        <button className="bg-white border-none text-black px-6 py-3 rounded-3xl duration-300 hover:brightness-75">
          Регистрация
        </button>
        <button className="bg-blue-500 border-none text-white px-6 py-3 rounded-3xl  duration-300 hover:brightness-75">
          Вход
        </button>
      </div>
    </nav>
  );
};
