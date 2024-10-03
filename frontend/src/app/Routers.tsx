import { Route, Routes } from "react-router-dom";

import { ExplorePage } from "../page/ExplorePage";
import { ProfilePage } from "../page/ProfilePage";
import { HomePage } from "../page/HomePage";
import { NotificationsPage } from "../page/NotificationsPage";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />

    <Route path="/explore" element={<ExplorePage />} />

    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/notifications" element={<NotificationsPage />} />
  </Routes>
);
