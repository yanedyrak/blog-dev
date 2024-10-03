import { BadgeX } from "lucide-react";

export const NotificationSample = () => {
  return (
    <div className="flex gap-3 px-5 py-3 flex-grow border-b-[1px] border-white border-opacity-30">
      <BadgeX size={40} fill="black" stroke="white" />
      <div className="text-white text-sm ">
        There was a login to your account @itoshiJohan from a new device on 03
        окт. 2024 г.. Review it now.
      </div>
    </div>
  );
};
