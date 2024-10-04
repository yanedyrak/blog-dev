import { Settings } from "lucide-react";
import { LinkWithBlueDecoration } from "../shared/ui/LinkWithBlueDecoration";

export const NotificationHead = () => {
  return (
    <div className="px-5 pt-5 border-b-[1px] border-white border-opacity-30">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-white">Notifications</h3>
        <button>
          <Settings stroke="white" size={25} />
        </button>
      </div>
      <div className="flex justify-between mt-5">
        <LinkWithBlueDecoration adress="/notifications" title="All" />
        <LinkWithBlueDecoration
          adress="/notifications/verified"
          title="Verified"
        />
        <LinkWithBlueDecoration
          adress="/notifications/mentions"
          title="Mentions"
        />
      </div>
    </div>
  );
};
