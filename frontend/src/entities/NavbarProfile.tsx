import { Ellipsis } from "lucide-react";
import { VerifiedProfileSVG } from "../shared/svg/VerifiedProfileSVG";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
export const NavbarProfile = () => {
  return (
    <Popover>
      <PopoverButton>
        <div className=" rounded-3xl flex gap-2 items-center duration-300 hover:bg-zinc-900">
          <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
          <div className="mr-4">
            <div className="flex gap-3 items-center">
              <h4 className="text-[1vw]  leading-none text-white">
                Bill Gates
              </h4>
              <VerifiedProfileSVG />
            </div>
            <p className="text-sm -ml-10 font-light text-zinc-500">
              @Bill Gates
            </p>
          </div>
          <Ellipsis color="white" />
        </div>
      </PopoverButton>

      <PopoverPanel transition anchor="top">
        <div className="w-[15vw] rounded-2xl py-4 mb-2 bg-black border-[1px] border-white border-opacity-60 ">
          <div className="p-3 text-white text-[1vw] font-bold cursor-pointer duration-200 hover:bg-zinc-800">
            Add an existing account
          </div>
          <div className="p-3 text-white  text-[1vw] font-bold cursor-pointer duration-200 hover:bg-zinc-800">
            Log out @itoshiJohan
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};
