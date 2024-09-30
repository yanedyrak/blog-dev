import { FollowProfile } from "../entities/FollowProfile";
import { Routers } from "./Routers";
import { NavbarProfile } from "../entities/NavbarProfile";
import { ProfileHead } from "../widgets/ProfileHead";

function App() {
  return (
    <>
      <Routers />
      <FollowProfile />
      <NavbarProfile />
      <ProfileHead />
    </>
  );
}

export default App;
