import { LinkWithBlueDecoration } from "../../shared/ui/LinkWithBlueDecoration";
import { HomePostForm } from "../../entities/HomePostForm";
export const HomeHead = () => {
  return (
    <div className="flex flex-col">
      <div className="flex border-b-[1px] border-white border-opacity-30">
        <LinkWithBlueDecoration adress="/" title="For you" />
        <LinkWithBlueDecoration adress="/following" title="Following" />
      </div>
      <HomePostForm />
    </div>
  );
};
