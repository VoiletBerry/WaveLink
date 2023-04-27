import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 my-5 mx-10 rounded-3xl shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl p-4">
          <a href="/" className="flex items-center ">
            <img src="logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <div className="flex items-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
