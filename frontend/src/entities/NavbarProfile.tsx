import { Ellipsis } from "lucide-react";
import { VerifiedProfileSVG } from "../shared/svg/VerifiedProfileSVG";
export const NavbarProfile = () => {
  return (
    <div className="flex items-center justify-between max-w-96">
      <div className="flex gap-2 items-center">
        <div className="w-10 h-10 bg-red-500 rounded-full"></div>
        <div className="flex flex-col">
          <div className="flex gap-3 items-center">
            <h4 className="text-lg leading-none text-white">Bill Gates</h4>
            <VerifiedProfileSVG />
          </div>
          <p className="text-sm text-gray-600">@Bill Gates</p>
        </div>
      </div>
      <Ellipsis color="white" />
    </div>
  );
};
