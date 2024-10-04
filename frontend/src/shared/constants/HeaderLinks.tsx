import {
  Bell,
  Bookmark,
  CircleEllipsis,
  HomeIcon,
  Mail,
  Search,
  User,
  Users,
} from "lucide-react";

export const headerLinks = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon size={30} />,
    filledIcon: <HomeIcon size={30} fill="white" />,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: <Search size={30} />,
    filledIcon: <Search size={30} fill="white" stroke="white" />,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: <Bell size={30} />,
    filledIcon: <Bell size={30} fill="white" stroke="white" />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <Mail size={30} />,
    filledIcon: <Mail size={30} fill="white" stroke="black" />,
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
    icon: <Bookmark size={30} />,
    filledIcon: <Bookmark size={30} fill="white" />,
  },

  {
    name: "Communities",
    link: "/communities",
    icon: <Users size={30} />,
    filledIcon: <Users size={30} fill="white" />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <User size={30} />,
    filledIcon: <User size={30} fill="white" />,
  },
  {
    name: "More",
    link: "/more",
    icon: <CircleEllipsis size={30} />,
    filledIcon: <CircleEllipsis size={30} fill="white" stroke="black" />,
  },
];
