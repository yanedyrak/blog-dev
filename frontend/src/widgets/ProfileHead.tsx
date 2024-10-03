import { ArrowLeft, CalendarDays } from "lucide-react";
import { VerifiedProfileSVG } from "../shared/svg/VerifiedProfileSVG";
import { ProfileHeadLinks } from "../shared/constants/ProfileHeadLinks";

import { LinkWithBlueDecoration } from "../shared/ui/LinkWithBlueDecoration";

export const ProfileHead = () => {
  return (
    <div className="flex flex-grow flex-col border-b-[1px] border-white border-opacity-30 overflow-hidden ">
      <div className="bg-black flex px-5 py-2 gap-5 flex-center">
        <button className="p-2 rounded-full duration-300 hover:bg-zinc-900">
          <ArrowLeft color="white" />
        </button>
        <div className="flex flex-col">
          <h3 className="text-lg text-white leading-none">johan</h3>
          <p className="text-gray-400 font-light text-sm">0 posts</p>
        </div>
      </div>
      <div className="h-56 bg-zinc-900"></div>
      <div className="flex flex-col gap-2">
        <div className="p-5 flex relative justify-between">
          <div></div>
          <div className="w-36 h-36 bg-red-500 border-[5px] border-black rounded-full absolute -top-16 cursor-pointer duration-300 hover:brightness-75"></div>
          <button className="font-bold px-5 py-2 border-[1px] text-white rounded-3xl duration-300 hover:brightness-75">
            Edit profile
          </button>
        </div>
        <div className="p-5">
          <div className="flex gap-4 items-center">
            <h3 className="text-2xl font-bold text-white leading-none">
              johan
            </h3>
            <button className="px-3 py-1 font-bold flex items-center gap-3 border-[1px] border-white rounded-3xl text-white text-sm duration-300 hover:brightness-75">
              <VerifiedProfileSVG size="14" />
              Get verified
            </button>
          </div>

          <h4 className="text-gray-400 font-light text-base">@johan</h4>
          <div className="mt-6 flex gap-2 items-center">
            <CalendarDays color="#9ca3af" />
            <p className="text-gray-400 font-light text-base ">
              Joined June 2022
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="flex gap-1">
              <span className="text-white">1</span>
              <p className="text-gray-400">Following</p>
            </div>
            <div className="flex gap-1">
              <span className="text-white">0</span>
              <p className="text-gray-400">Followers</p>
            </div>
          </div>
          <div className="flex mt-5">
            {ProfileHeadLinks.map((link, index) => (
              <LinkWithBlueDecoration
                key={index}
                adress={link.path}
                title={link.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
