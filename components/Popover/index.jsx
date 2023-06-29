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
      <Popover className="">
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
          <Popover.Panel className="absolute z-10">
            <div className="w-full overflow-hidden rounded-lg border border-white  shadow-lg ring-1 ring-black ring-opacity-5 dark:border-gray-700">
              <div
                className={`gap-8 bg-white px-5  py-5 dark:bg-dark-background ${className}`}
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
