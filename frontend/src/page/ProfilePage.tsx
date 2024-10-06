import { SubscribeArea } from "../widgets/SubscribeArea";
import { WhoToFollow } from "../entities/WhoToFollow";
import { Search } from "../shared/ui/Search";
import { ProfileHead } from "../widgets/profile/ProfileHead";
import { ProfileContent } from "../widgets/profile/ProfileContent";

export const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-col flex-grow">
        <ProfileHead />
        <ProfileContent />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
