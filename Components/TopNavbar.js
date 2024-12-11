import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from 'classnames';


import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inspirations", href: "#",src:"/images/Inspiration.png", current: true },
  { name: "Mes favoris", href: "#", src:"/images/heart.png", current: false },
  { name: "Painer", href: "#", src:"/images/Icon.svg", current: false }
];



export default function TopNavbar() {
  return (
    <div>
      <Disclosure as="nav" className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-xs">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center mt-4">
                <Image
                  alt="Your Company"
                  src="/images/Logo.png"
                  className=""
                  width={130} height={90}
                />
              </div>
              <div className="SeachBar ml-5">
                <div className="relative w-{20%}">
                  <div>
                    <div className="m-1">
                      <div className="flex items-center rounded-md bg-gray-100 p-2">
                        <input
                          id="price"
                          name="price"
                          type="text"
                          placeholder="Rechercher un produit"
                          className="block min-w-0 grow py-1 text-base text-gray-900 placeholder:text-gray-400 bg-gray-100 focus:ring-0 focus:outline-none sm:text-sm rounded-r-md"
                        />
                        <div className="grid shrink-1 grid-cols-1 focus-within:relative">
                          {/* Search Icon */}
                          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute item-center mt-1 mb-6 inset-y-0 right-0 flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
            <button
                type="button"
                className="Inspirations relative pl-10 pr-5 flex items-center justify-center h-12 rounded-lg  text-black outline-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              >
                <Image className="" width={10} height={10} src="/images/Inspiration.png" alt="L"/>
                <span className="p-2">Inspirations</span>
                {/* <Image className="bg-gray-400 p-1 rounded-lg" src="/images/24.png"></img> */}
              </button>

            <button
                type="button"
                className="favoris relative pr-6 flex items-center justify-center h-12 rounded-lg  text-black outline-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              >
                <Image className="" width={15} height={10} src="/images/heart.png" alt="L"/>
                <span className="p-2">Mes favoris</span>
               <div className="bg-gray-400 pr-1 text-xs pl-1 rounded-lg">
                24
               </div>
              </button>
              
              
              
              <button
                type="button"
                className="Panier relative p-4 flex items-center justify-center h-12 rounded-lg bg-[#0093D0] text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
              >
                <Image className="" width={15} height={10} src="/images/Icon.svg"alt="L" />
                <span className="p-2">Panier</span>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">


                
                <div className="flex items-center justify-center gap-5">
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <div className="bg-[#EAEDEE] w-10 h-10 rounded-full outline-none"></div>
                  </MenuButton>

                  <div className="flex items-center justify-start gap-1">
                    <p className="text-sm">FR</p>
                    <ChevronDownIcon className="h-3 w-3 text-gray-800 " />
                  </div>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-1 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-100 text-gray-600"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium flex gap-2"
                )}
              >
                <Image className="" width={20} height={10} src={item.src} alt="L"/>
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
