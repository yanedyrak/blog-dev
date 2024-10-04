import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Search Twitter"
        className="w-full pl-10 py-2 pr-4 text-lg duration-100 placeholder:text-stone-500 bg-stone-900 rounded-full focus:bg-stone-200 focus:outline-none"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon size={20} color="gray" />
      </div>
    </div>
  );
};
