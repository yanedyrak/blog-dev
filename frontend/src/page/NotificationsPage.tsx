import { NotificationSample } from "../entities/NotificationSample";
import { WhoToFollow } from "../entities/WhoToFollow";
import { NotificationHead } from "../widgets/NotificationHead";
import { SubscribeArea } from "../widgets/SubscribeArea";
import { Search } from "../shared/ui/Search";
export const NotificationsPage = () => {
  return (
    <>
      <div className="border-x-[1px] border-white border-opacity-30 min-h-screen">
        <NotificationHead />
        <NotificationSample />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
