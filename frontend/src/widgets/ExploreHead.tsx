import { Settings } from "lucide-react";
import { Search } from "../shared/ui/Search";
import { LinkWithBlueDecoration } from "../shared/ui/LinkWithBlueDecoration";
export const ExploreHead = () => {
  return (
    <div className="pt-2 px-5 border-b-[1px] border-white border-opacity-30">
      <div className="flex justify-between gap-10">
        <Search />
        <button>
          <Settings stroke="white" size={25} />
        </button>
      </div>
      <div className="flex justify-between mt-2">
        <LinkWithBlueDecoration adress="/explore" title="For you" />
        <LinkWithBlueDecoration
          adress="/notifications/verified"
          title="Trending"
        />
        <LinkWithBlueDecoration adress="/notifications/mentions" title="News" />
        <LinkWithBlueDecoration
          adress="/notifications/mentions"
          title="Sports"
        />
        <LinkWithBlueDecoration
          adress="/notifications/mentions"
          title="Entertainment"
        />
      </div>
    </div>
  );
};
