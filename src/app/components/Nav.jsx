'use client'
import Link from "next/link";
import { Dropdown, Avatar } from "flowbite-react";
import Script from 'next/script';
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";


export default function Nav() {
  return (
    <>
    <nav>
      <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="" className="h-20 w-20" alt="logo" />
            <span className="text-left text-2xl font-semibold whitespace-nowrap text-black">
              PrepMaster
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="Avatar" img="" rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm text-black">Hi Username</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link href="/signin">Sign In / Sign Up</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="#">My profile</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link href="#">Sign out <ArrowRightStartOnRectangleIcon className="w-5 h-5 mr-2" />
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Meal Plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </nav>
    </>
  );
}
