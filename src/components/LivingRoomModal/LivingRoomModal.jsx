import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CardImg from "../../assets/placeholder1.png";
import DeleteIcon from "./DeleteIcon";
import Download from "./Download";

export default function MyModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[653px] transform overflow-hidden rounded-[16px] text-left align-middle shadow-xl transition-all flex flex-col">
                  <div className="bg-[#E4E4E4] h-[60px] px-[32px] py-[17px] w-full flex items-center justify-between p-3">
                    <div className="text-[20px] text-[#222222] font-semibold">
                      Living Room
                    </div>
                    <div className="flex items-center space-x-5">
                      <div onClick={closeModal}>
                        <DeleteIcon />
                      </div>
                      <div onClick={closeModal}>
                        <Download />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white grow px-[32px] py-[27px] flex h-full flex items-start flex-wrap sm:flex-nowrap">
                    <img
                      src={CardImg}
                      alt="cart-img"
                      className="rounded-[10px] object-cover sm:h-full w-full sm:max-w-[279px] max-w-none"
                    ></img>
                    <div className="space-y-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                      <div className="text-[22px] text-[#222222] font-bold">
                        The Living Room
                      </div>
                      <div className="text-[16px] text-[#626262]">
                        Made with marble counter tops designed by a leading
                        Italian architect.
                      </div>
                      <button className="text-[#2AB7DD] text-[18px] font-bold">
                        Edit Text
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
