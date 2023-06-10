import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Dropdown = (props) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex flex-row flex-no-wrap justify-center items-center mx-4 my-2">
        <Menu.Button
          style={{
            background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
          }}
          className="inline-flex justify-center gap-x-1.5 text-lg font-roboto font-bold text-[#0D103C] text-center rounded-[20px] px-6 py-4"
        >
          {props.shopByCategoryItem}
          <ChevronDownIcon
            className="h-8 w-8 text-[#0D103C]"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 origin-top-right rounded-[20px] bg-[#C1FFE6] mx-4">
          <div className="py-1">
            {props.list.map((item) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "text-[#0D103C] font-bold" : "text-gray-700",
                        "block px-6 py-2 text-lg text-left"
                      )}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
