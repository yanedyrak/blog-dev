import { X } from "lucide-react";
import { useState } from "react";
import { LoginModal } from "../widgets/login/LoginModal";
import { RegisterModal } from "../widgets/register/RegisterModal";

export const LoginPage = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  return (
    <>
      <div className="-ml-64 w-screen h-screen bg-black z-10 flex justify-center items-center">
        <X size={900} stroke="white" />
        <div className="flex flex-col p-10">
          <h1 className="text-7xl font-bold text-white">
            В курсе происходящего
          </h1>
          <p className="text-4xl font-bold text-white mt-10">
            Присоединяйтесь сегодня.
          </p>
          <div className="flex flex-col mt-10 items-start">
            <button
              onClick={() => setIsOpenLogin(true)}
              className="w-[60%] py-3 mt-5 bg-white font-bold border-[1px] rounded-3xl duration-300 hover:brightness-75"
            >
              Login
            </button>
            <button
              onClick={() => setIsOpenRegister(true)}
              className="w-[60%] py-3 mt-5 bg-blue-500 font-bold text-white border-[1px] border-white border-opacity-30 rounded-3xl duration-300 hover:bg-zinc-700 hover:text-white"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <LoginModal isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} />
      <RegisterModal isOpen={isOpenRegister} setIsOpen={setIsOpenRegister} />
    </>
  );
};
