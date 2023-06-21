import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef } from "react";

export const PopOver = ({ isOpen, setIsOpen, children, className }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className="relative" ref={popoverRef}>
      <Popover className="flex justify-center">
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="z-10 absolute">
            <div className="overflow-hidden border w-full border-white dark:border-gray-700  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div
                className={`gap-8 px-5 py-5  bg-white dark:bg-gray-800 ${className}`}
              >
                {children}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
