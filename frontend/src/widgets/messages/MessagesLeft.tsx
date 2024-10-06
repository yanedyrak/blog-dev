import { MessagesHead } from "./MessagesHead";
import { WelcomeInbox } from "../../shared/ui/messages/WelcomeInbox";
export const MessagesLeft = () => {
  return (
    <div className="flex-grow min-h-full border-r-[1px] border-white border-opacity-30 p-5 flex flex-col ">
      <MessagesHead />
      <div className="flex justify-center">
        <WelcomeInbox />
      </div>
    </div>
  );
};
