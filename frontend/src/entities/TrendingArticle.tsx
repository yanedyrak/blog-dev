import { MoreHorizontal } from "lucide-react";

export const TrendingArticle = () => {
  return (
    <div className="flex flex-grow items-start justify-between p-3 gap-1 ">
      <div className="flex flex-col gap-1">
        <p className="text-gray-400 text-xs ">Politics · Trending</p>
        <h4 className="text-white font-bold leading-none ">World War 3</h4>
        <p className="text-gray-400 text-xs">58.4k posts</p>
      </div>

      <button
        className="border-none p-1 rounded-full duration-300 group hover:bg-blue-800 hover:bg-opacity-50"
        aria-label="More"
      >
        <MoreHorizontal
          size={20}
          color="white"
          style={{
            transitionDuration: "300ms",
          }}
        />
      </button>
    </div>
  );
};
