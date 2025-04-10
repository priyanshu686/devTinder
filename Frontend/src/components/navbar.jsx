import React,{useState} from "react";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }


  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>
      <div className="dropdown ">
      <div className="btn btn-ghost btn-circle avatar mx-2">
        <div className="w-8 rounded-full">
          <img
            alt="Profile Block"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      </div>
      <div className="flex-none dropdown">
        <button
          className="btn btn-square btn-ghost"
          onClick={toggleMenu}
          aria-label="Open options menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </button>
          <ul className="absolute dropdown-content right-4 top-16 bg-white shadow-lg rounded-lg p-0 space-y-2 m-0 h-auto w-28">
            <li className="hover:bg-base-300 cursor-pointer p-4">Profile</li>
            <li className="hover:bg-base-300 cursor-pointer p-4">Home</li>
            <li className="hover:bg-base-300 cursor-pointer p-4">Logout</li>
          </ul>
      </div>
      
    </div>



  );
};

export default Navbar;
