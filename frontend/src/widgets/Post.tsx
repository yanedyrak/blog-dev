import {
  Bookmark,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  Text,
} from "lucide-react";
import { VerifiedProfileSVG } from "../shared/svg/VerifiedProfileSVG";
export const Post = () => {
  return (
    <div className="flex gap-3 p-5 border-b-[1px]  border-white border-opacity-30">
      <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full"></div>
      <div className="flex flex-col flex-grow">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg text-white">johan</h3>
          <VerifiedProfileSVG />
          <p className="text-gray-400">@johan</p>
          <p className="text-gray-400">9m</p>
        </div>
        <p className="text-white text-sm">
          Итоши Йохан Итоши Йохан Итоши Йохан Итоши Йохан Итоши Йохан Итоши
          Йохан Итоши Йохан Итоши Йохан Итоши Йохан Итоши Йохан Итоши Йохан
          Итоши Йохан Итоши Йохан Итоши Йохан Итоши Йохан Итоши Йохан Итоши
          Йохан Итоши Йохан
        </p>
        <div className="flex justify-between items-center mt-3">
          <button className="flex gap-1 items-center">
            <MessageCircle size={20} color="gray" />
            <span className="text-gray-400 text-sm">11</span>
          </button>
          <button className="flex gap-1 items-center">
            <Repeat2 size={20} color="gray" />
            <span className="text-gray-400 text-sm">11</span>
          </button>
          <button className="flex gap-1 items-center">
            <Heart size={20} color="gray" />
            <span className="text-gray-400 text-sm">11</span>
          </button>
          <button className="flex gap-1 items-center">
            <Text className=" rotate-[-90deg]" size={20} color="gray" />
            <span className="text-gray-400 text-sm">11</span>
          </button>
          <div className="flex gap-2 ">
            <Bookmark size={20} color="gray" />
            <Share size={20} color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
};
