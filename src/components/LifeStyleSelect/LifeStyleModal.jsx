import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import CheckBox from "../CheckBox/CheckBox";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className='text-[#2AB7DD] text-[15px] mt-2 cursor-pointer'
        >
          View All
        </button>
      </div>

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
                <Dialog.Panel className="w-[500px] h-[588]px transform overflow-hidden rounded-md text-left align-middle shadow-xl transition-all">
                  <div className="bg-[#F3F3F3] w-full flex justify-between p-3">
                    <div className="font-semibold">All Life Styles</div>
                    <div onClick={closeModal}>
                      <i class="fas fa-times"></i>
                    </div>
                  </div>
                  <div className="bg-white relative p-[24px] bg-[#]">
                    <input
                      className="w-full h-[38px] bg-[#F7F7F7] border-stroke border rounded-full pl-[40px] outline-none focus:border-gray-700"
                      placeholder="Search Amenities"
                    />
                    <span className="absolute left-[40px] top-[32px]">
                      <i class="fas fa-search"></i>
                    </span>
                    <div className="font-bold mt-[20px]">Added</div>
                    <CheckBox text='All'/>
                    <div className="font-bold mt-[30px]">Available</div>
                    <CheckBox text='High Ceilings'/>
                    <CheckBox text='Gym '/>
                    <CheckBox text='all'/>
                    <CheckBox text='blue'/>
                    <CheckBox text='bottoms'/>
                    <CheckBox text='cream'/>
                    <CheckBox text='essentials'/>
                    <CheckBox text='fleeces'/>
                    <CheckBox text='areen'/>
                  </div>
                  <div className="bg-white p-[20px] flex justify-end space-x-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-white font-bold border-black border-1 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border px-6 border-transparent text-white bg-primary px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Save
                    </button>
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
