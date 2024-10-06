export const SelectAMessage = () => {
  return (
    <div className=" w-min">
      <h3 className="text-white text-3xl font-bold w-max">Select a message</h3>
      <p className="text-gray-400 text-sm mt-3">
        Choose from your existing conversations, start a new one, or just keep
        swimming.
      </p>
      <button className="mt-5 text-white text-lg px-6 py-3 bg-blue-500 rounded-3xl duration-100 hover:brightness-90 ">
        New message
      </button>
    </div>
  );
};
