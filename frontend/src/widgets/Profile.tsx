import { ProfileHead } from "./ProfileHead";

import { WhoToFollowProfile } from "../entities/WhoToFollowProfile";
import { ProfileFunctionsCarousel } from "../entities/ProfileFunctionsCarousel";
export const Profile = () => {
  return (
    <div className="flex flex-col flex-grow border-x-[1px] border-white border-opacity-30">
      <ProfileHead />
      <ProfileFunctionsCarousel />
      <WhoToFollowProfile />
    </div>
  );
};
