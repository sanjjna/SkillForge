import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

const UserMenu = () => {
  const [user] = useState({ name: "Sanjana", initials: "SV" });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full focus:outline-none">
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
          {user.initials}
        </div>
        <ChevronDown className="w-4 h-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg focus:outline-none z-20">
          <div className="px-2 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <User className="w-4 h-4 mr-2" /> Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm text-red-500`}
                >
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
