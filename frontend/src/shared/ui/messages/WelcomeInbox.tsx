export const WelcomeInbox = () => {
  return (
    <div className="mt-10 w-min">
      <h3 className="text-white text-3xl font-bold w-max">
        Welcome to your inbox!
      </h3>
      <p className="text-gray-400 text-sm mt-3">
        Drop a line, share posts and more with private conversations between you
        and others on X
      </p>
      <button className="mt-5 text-white text-lg px-6 py-3 bg-blue-500 rounded-3xl duration-100 hover:brightness-90  ">
        Write a message
      </button>
    </div>
  );
};
