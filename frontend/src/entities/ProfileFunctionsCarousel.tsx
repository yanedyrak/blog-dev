import {
  Bell,
  MessageSquareMore,
  MoveRight,
  User,
  UserPen,
} from "lucide-react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const colors = {
  purple: "from-purple-500 via-blue-600 to-pink-500",
  red: "from-red-500 via-yellow-500 to-orange-500",
  blue: "from-red-500 to-blue-500",
  cyan: "from-purple-500 via-blue-500 to-cyan-500",
};

const data = [
  {
    Component: UserPen,
    color: colors.purple,
    size: 30,
    text: "Follow 5 account",
  },
  {
    Component: MessageSquareMore,
    color: colors.red,
    size: 30,
    text: "Follow 3 Topics",
  },
  {
    Component: User,
    color: colors.blue,
    size: 30,
    text: "Complete your profile",
  },
  {
    Component: Bell,
    color: colors.cyan,
    size: 30,
    text: "Turn on notifications",
  },
];

export const ProfileFunctionsCarousel = () => {
  return (
    <div className="flex flex-grow relative p-5 h-52 overflow-hidden">
      <p className="text-white font-bold text-2xl">Let's get started</p>
      <div className="absolute w-full bottom-2">
        <Carousel responsive={responsive} arrows={false}>
          {data.map(({ Component, color, size, text }, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div
                className={`w-40 h-24 rounded-3xl bg-gradient-to-br ${color} flex justify-center items-center cursor-pointer duration-75 hover:brightness-75 relative`}
              >
                <Component size={size} stroke="white" />
                <div className="px-2 py-1 absolute bottom-2 left-2 bg-green-700 text-white text-xs rounded-lg">
                  DONE
                </div>
              </div>
              {text && (
                <p className="text-white text-xs font-bold p-1">{text}</p>
              )}
            </div>
          ))}
          <div className="w-40 h-32 flex flex-col justify-center items-center cursor-pointer duration-100 hover:brightness-75">
            <MoveRight
              size={40}
              color="white"
              className="p-2 bg-blue-500 rounded-full"
            />
            <p className="text-blue-500 text-xs font-bold p-1">See more</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
