import { WhoToFollow } from "../entities/WhoToFollow";
import { Search } from "../shared/ui/Search";
import { BookmarksHead } from "../widgets/BookmarksHead";
import { SubscribeArea } from "../widgets/SubscribeArea";
import { BookmarksContent } from "../widgets/BookmarksContent";
export const BookmarksPage = () => {
  return (
    <>
      <div className="flex-grow border-x-[1px] border-white border-opacity-30 min-h-screen">
        <BookmarksHead />
        <BookmarksContent />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
