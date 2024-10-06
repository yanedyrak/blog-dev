import { X } from "lucide-react";

export const LogoutWidget = () => {
  return (
    <div className="p-10 w-[350px] bg-black rounded-3xl">
      <div className="flex justify-center">
        <X size={70} stroke="white" />
      </div>
      <h3 className="text-2xl font-bold text-white">Log out from x</h3>
      <p className="text-gray-400 text-sm mt-3">
        You can always log back in at any time. If you just want to switch
        accounts, you can do that by adding an existing account.
      </p>
      <div className="flex flex-col">
        <button className="py-3 mt-5 bg-white font-bold border-[1px] rounded-3xl duration-300 hover:brightness-75">
          Log out
        </button>
        <button className="py-3 mt-5 bg-black font-bold text-white border-[1px] border-white border-opacity-30 rounded-3xl duration-300 hover:bg-zinc-700 hover:text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};
