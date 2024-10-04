import { WhoToFollow } from "../entities/WhoToFollow";
import { Search } from "../shared/ui/Search";
import { CommunitiesHead } from "../widgets/CommunitiesHead";
import { SubscribeArea } from "../widgets/SubscribeArea";
import { Post } from "../widgets/Post";
export const CommunitiesPage = () => {
  return (
    <>
      <div className="flex-grow border-x-[1px] border-white border-opacity-30 min-h-screen">
        <CommunitiesHead />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
