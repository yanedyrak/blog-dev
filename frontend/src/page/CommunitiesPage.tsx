import { WhoToFollow } from "../entities/WhoToFollow";
import { Search } from "../shared/ui/Search";
import { CommunitiesHead } from "../widgets/communities/CommunitiesHead";
import { SubscribeArea } from "../widgets/SubscribeArea";

export const CommunitiesPage = () => {
  return (
    <>
      <div className="flex-grow border-x-[1px] border-white border-opacity-30 min-h-screen">
        <CommunitiesHead />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
