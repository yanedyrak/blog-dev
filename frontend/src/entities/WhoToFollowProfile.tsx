import { FollowProfile } from "./FollowProfile";

export const WhoToFollowProfile = () => {
  return (
    <div className="border-t-[1px] border-white border-opacity-30 p-5">
      <h3 className="text-2xl font-bold text-white mb-5">Who to follow</h3>
      <div className="flex flex-col gap-5">
        <FollowProfile />

        <FollowProfile />
        <FollowProfile />
        <FollowProfile />

        <FollowProfile />
      </div>
    </div>
  );
};
