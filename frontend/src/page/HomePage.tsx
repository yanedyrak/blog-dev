import { WhoToFollow } from "../entities/WhoToFollow";

import { SubscribeArea } from "../widgets/SubscribeArea";
import { HomeHead } from "../widgets/home/HomeHead";
import { HomeContent } from "../widgets/home/HomeContent";
import { Search } from "../shared/ui/Search";

export const HomePage = () => {
  return (
    <>
      <div className="flex flex-col flex-grow min-h-screen border-x-[1px] border-white border-opacity-30">
        <HomeHead />
        <HomeContent />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
