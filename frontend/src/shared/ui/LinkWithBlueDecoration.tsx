import clsx from "clsx";
import { useLocation } from "react-router-dom";

export const LinkWithBlueDecoration = ({
  adress,
  title,
}: {
  adress: string;
  title: string;
}) => {
  const { pathname } = useLocation();
  return (
    <button
      key={adress}
      className={clsx(
        "font-light text-base p-3 flex-grow duration-300 hover:bg-zinc-900 relative",
        {
          "text-white": pathname === adress,
          "text-gray-400": pathname !== adress,
        }
      )}
    >
      {pathname === adress ? (
        <div className="w-[60%] h-1 bg-blue-500 rounded-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      ) : null}
      {title}
    </button>
  );
};
