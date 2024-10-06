import { VerifiedProfileSVG } from "../shared/svg/VerifiedProfileSVG";
export const FollowProfile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
        <div className="flex flex-col">
          <div className="flex gap-3 items-center">
            <h4 className="text-lg leading-none text-white">Bill Gates</h4>
            <VerifiedProfileSVG />
          </div>
          <p className="text-sm font-light text-zinc-500">@Bill Gates</p>
        </div>
      </div>
      <button className="px-5 py-1 bg-white border-none rounded-3xl font-bold duration-300 hover:brightness-90 ">
        Follow
      </button>
    </div>
  );
};
