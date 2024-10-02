import { Navbar } from "../widgets/Navbar";
import { ProfileHead } from "../widgets/ProfileHead";
export const ExplorePage = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      <div>
        <ProfileHead />
      </div>
    </div>
  );
};
