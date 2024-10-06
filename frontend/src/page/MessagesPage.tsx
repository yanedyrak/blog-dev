import { MessagesLeft } from "../widgets/messages/MessagesLeft";
import { MessagesRight } from "../widgets/messages/MessagesRight";

export const MessagesPage = () => {
  return (
    <div className="border-l-[1px] border-white border-opacity-30 flex flex-grow min-h-screen">
      <MessagesLeft />
      <MessagesRight />
    </div>
  );
};
