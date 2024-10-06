import {
  CalendarCheck,
  Earth,
  Image,
  ImagePlay,
  ListTodo,
  Smile,
} from "lucide-react";

export const HomePostForm = () => {
  return (
    <div className="flex gap-3 px-5 pt-5 border-b-[1px]  border-white border-opacity-30">
      <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full" />
      <div className="flex flex-col flex-grow">
        <textarea
          className="bg-transparent text-2xl outline-none  text-white font-thin placeholder:text-zinc-500 placeholder:font-light resize-none"
          placeholder="What's happening?"
          style={{
            resize: "none",
          }}
          onChange={(e) => {
            const textarea = e.target as HTMLTextAreaElement;
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
          }}
        />
        <button className="my-3 flex gap-2">
          <Earth size={20} color="#3b82f6" />
          <p className="text-blue-500 text-sm font-bold">Everuone can reply</p>
        </button>
        <div className="p-3 border-t-[1px] border-white border-opacity-30  flex justify-between">
          <div className="flex gap-2 items-center">
            <Image size={20} color="#3b82f6" />
            <ImagePlay size={20} color="#3b82f6" />
            <ListTodo size={20} color="#3b82f6" />
            <Smile size={20} color="#3b82f6" />
            <CalendarCheck size={20} color="#3b82f6" />
          </div>
          <button className="px-5 py-2 text-white bg-blue-500 border-none rounded-3xl font-bold duration-300 hover:brightness-75">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
