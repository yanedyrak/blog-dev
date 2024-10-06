import { WhoToFollowProfile } from "../../entities/WhoToFollowProfile";
import { ProfileFunctionsCarousel } from "../../entities/ProfileFunctionsCarousel";
export const ProfileContent = () => {
  return (
    <div className="flex flex-col flex-grow border-x-[1px] border-white border-opacity-30">
      <ProfileFunctionsCarousel />
      <WhoToFollowProfile />
    </div>
  );
};
