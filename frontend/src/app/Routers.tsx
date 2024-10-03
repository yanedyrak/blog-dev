import { Route, Routes } from "react-router-dom";

import { ExplorePage } from "../page/ExplorePage";
import { ProfilePage } from "../page/ProfilePage";
import { HomePage } from "../page/HomePage";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="/explore" element={<ExplorePage />} />

    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);
