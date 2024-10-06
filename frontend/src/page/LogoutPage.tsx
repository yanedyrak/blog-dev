import { LogoutWidget } from "../widgets/logout/LogoutWidget";

export const LogoutPage = () => {
  return (
    <div className="-ml-64 w-screen h-screen z-1 bg-gray-600 absolute flex justify-center items-center">
      <LogoutWidget />
    </div>
  );
};
