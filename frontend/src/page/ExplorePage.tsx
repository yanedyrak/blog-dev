import { ExploreHead } from "../widgets/ExploreHead";
import { SubscribeArea } from "../widgets/SubscribeArea";
import { WhoToFollow } from "../entities/WhoToFollow";
import { TrendingArticle } from "../entities/TrendingArticle";
import { Search } from "../shared/ui/Search";

export const ExplorePage = () => {
  return (
    <>
      <div className="flex-grow border-x-[1px] border-white border-opacity-30 min-h-screen">
        <ExploreHead />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
        <TrendingArticle />
      </div>
      <div className="p-5 flex flex-col gap-4">
        <Search />
        <SubscribeArea />
        <WhoToFollow />
      </div>
    </>
  );
};
