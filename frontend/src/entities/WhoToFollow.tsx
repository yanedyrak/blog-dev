import { FollowProfile } from "./FollowProfile";

export const WhoToFollow = () => {
  return (
    <div className="min-w-[350px] flex flex-col gap-7 p-5 rounded-3xl border-[1px] border-opacity-30 border-white max-w-[350px]">
      <h3 className="font-bold text-white text-2xl ">Who to follow</h3>
      <FollowProfile />
      <FollowProfile />
      <FollowProfile />
      <p className="text-blue-500 mt-5 text-sm">Show more</p>
    </div>
  );
};
