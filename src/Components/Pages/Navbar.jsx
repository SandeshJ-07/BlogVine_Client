import React from "react";
import styles from "../../assets/theme.json";

const Navbar = (props) => {
  const user = props.user;

  return (
    <nav
      class={`fixed w-screen z-[100] bg-[${styles.colors.lbackground}] border-gray-200 px-8 sm:px-12 py-2.5 dark:bg-[${styles.colors.background}] f-helvetica border-b-[0.2px] border-black dark:border-white`}
    >
      <div class="flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center">
          <span class="self-center text-2xl whitespace-nowrap dark:text-white f-cambria">
            <span className={` text-[${styles.colors.ltextColor}] dark:text-[${styles.colors.textColor}]`}>Blog</span><span className={`text-[${styles.colors.green}]`}>Vines</span>
          </span>
        </a>
        <div class="flex items-center md:order-2">
          <button
            type="button"
            class={`flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${
              user != null ? "" : "hidden"
            }`}
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="userProfile"
            />
          </button>
          <div
            class={`z-50 hidden my-4 text-base list-none bg-[${styles.colors.lbackground}] text-black divide-y divide-gray-100 rounded shadow dark:bg-[${styles.colors.background}]`}
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul class="py-1" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto mr-5"
          id="mobile-menu-2"
        >
          <ul
            class={`flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[${styles.colors.lbackground}] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-[${styles.colors.background}] md:dark:bg-[${styles.colors.background}] dark:border-[${styles.colors.background}] tracking-wide`}
          >
            <li>
              <a
                href="/"
                class="block py-2 pl-4 pr-5 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-4 pr-5 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Write
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 pl-4 pr-5 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
