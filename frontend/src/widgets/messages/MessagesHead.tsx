import { MailPlus, Settings } from "lucide-react";
export const MessagesHead = () => {
  return (
    <div className="flex justify-between  border-white border-opacity-30">
      <h3 className="text-2xl font-bold text-white">Messages</h3>
      <div className="flex gap-4">
        <button>
          <Settings stroke="white" size={20} />
        </button>
        <button>
          <MailPlus stroke="white" size={20} />
        </button>
      </div>
    </div>
  );
};
