import React, { Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";

export const DropDown = ({ isOpen, children, setIsOpen }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
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
    <div className="relative z-50">
      <Menu ref={dropdownRef}>
        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items>
            <Menu.Item as="div" className="absolute  right-0 ">
              <div class="absolute right-0 mt-2 w-56 origin-top-right scale-100 transform divide-y divide-gray-100 rounded-md bg-white  opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-background">
                {children}
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
