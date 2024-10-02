import { Navbar } from "../widgets/Navbar";
import { ProfileHead } from "../widgets/ProfileHead";
import { WhoToFollow } from "../entities/WhoToFollow";
import { SubscribeArea } from "../widgets/SubscribeArea";
import { Search } from "../shared/ui/Search";

export const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="flex ml-64">
        <ProfileHead />
        <div className="p-5 flex flex-col gap-4">
          <Search />
          <SubscribeArea />
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
};
