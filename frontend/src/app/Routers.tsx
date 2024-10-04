import { Route, Routes } from "react-router-dom";

import { ExplorePage } from "../page/ExplorePage";
import { ProfilePage } from "../page/ProfilePage";
import { HomePage } from "../page/HomePage";
import { NotificationsPage } from "../page/NotificationsPage";
import { BookmarksPage } from "../page/BookmarksPage";
import { CommunitiesPage } from "../page/CommunitiesPage";

export const Routers = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/notifications" element={<NotificationsPage />} />
    <Route path="/bookmarks" element={<BookmarksPage />} />
    <Route path="/communities" element={<CommunitiesPage />} />
  </Routes>
);
