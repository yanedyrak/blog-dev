import { Dialog, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";

export const RegisterModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center bg-blue-200 bg-opacity-30">
        <DialogPanel className="w-[30%] bg-black rounded-3xl">
          <div className="flex justify-between items-center p-5">
            <button onClick={() => setIsOpen(false)}>
              <X size={20} stroke="white" />
            </button>
            <X size={70} stroke="white" />
            <div className="w-5"></div>
          </div>
          <div className="w-[50%] mx-auto my-5">
            <h3 className="text-3xl text-white font-bold">Регистрация в Х</h3>
            <div className="flex flex-col my-8 gap-3">
              <input
                className="w-full p-3 text-white bg-black rounded-sm border-[1px] border-white border-opacity-60 focus-within:outline-blue-500  placeholder:text-zinc-400"
                type="text"
                placeholder="Имя"
              />
              <input
                className="w-full p-3 text-white bg-black rounded-sm border-[1px] border-white border-opacity-60 focus-within:outline-blue-500  placeholder:text-zinc-400"
                type="text"
                placeholder="Адрес электронной почты "
              />
              <input
                className="w-full p-3 text-white bg-black rounded-sm border-[1px] border-white border-opacity-60 focus-within:outline-blue-500  placeholder:text-zinc-400"
                type="text"
                placeholder="Пароль"
              />
            </div>
            <button className="w-full py-1 mt-5 bg-white font-bold border-[1px] rounded-3xl duration-300 hover:brightness-75">
              Далее
            </button>

            <p className="text-sm text-zinc-400 mt-10 mb-20">
              Уже есть учетная запись
              <span className="text-blue-500 px-1">Войдите</span>
            </p>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
