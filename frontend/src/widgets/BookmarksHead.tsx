import { Search } from "lucide-react";

export const BookmarksHead = () => {
  return (
    <div className="flex flex-col gap-4 px-5 py-2">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold leading-none text-white">Bookmarks</h3>
        <p className="text-gray-400 text-xs">@itoshiJohan</p>
      </div>

      <div className="relative rounded-full border border-white border-opacity-30 px-4 py-2 focus-within:outline outline-blue-500 outline-2">
        <Search
          size={20}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search Bookmarks"
          className="pl-10 bg-transparent outline-none w-full text-white placeholder:text-gray-400 placeholder:font-light text-sm"
        />
      </div>
    </div>
  );
};
