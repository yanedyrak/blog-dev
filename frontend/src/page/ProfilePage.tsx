import { Profile } from "../widgets/Profile";
import { SubscribeArea } from "../widgets/SubscribeArea";
import { WhoToFollow } from "../entities/WhoToFollow";
import { Search } from "../shared/ui/Search";

export const ProfilePage = () => {
  return (
    <>
      <Profile />
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
