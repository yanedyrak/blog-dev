import { ArrowLeft, Search, UserRoundPlus } from "lucide-react";
export const CommunitiesHead = () => {
  return (
    <div className="flex justify-between p-5 border-b-[1px] border-white border-opacity-30">
      <div className="flex items-center gap-4">
        <ArrowLeft stroke="white" size={20} />
        <h3 className="text-xl text-white font-bold">Communities</h3>
      </div>
      <div className="flex items-center gap-4">
        <Search size={20} stroke="white" />
        <UserRoundPlus size={20} stroke="white" />
      </div>
    </div>
  );
};
