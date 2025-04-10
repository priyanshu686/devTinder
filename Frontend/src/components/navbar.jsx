import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>
      <div className="btn btn-ghost btn-circle avatar mx-2">
        <div className="w-8 rounded-full">
          <img
            alt="Profile Block"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <div className="flex-none dropdown">
        <div
          tabIndex={1}
          className="hover:bg-base-300 cursor-pointer btn btn-ghost btn-circle avatar mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current cursor-pointer "
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </div>
        <ul
          tabindex={1}
          className=" absolute dropdown-content right-4 top-16 bg-white shadow-lg rounded-lg p-0 space-y-2 m-0 h-auto w-28"
        >
          <li className="hover:bg-base-300 cursor-pointer p-4">Profile</li>
          <li className="hover:bg-base-300 cursor-pointer p-4">Home</li>
          <li className="hover:bg-base-300 cursor-pointer p-4">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
