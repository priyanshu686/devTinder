import React,{useState} from "react";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>

      <div className="flex-none">
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
        {isMenuOpen && (
            <div
              // ref={menuRef} 
              className="absolute right-0 w-40 bg-white text-black shadow-lg rounded-lg mt-2 z-10"
            >
              <ul className="py-2">
                <li>
                  <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                </li>
                <li>
                  <a href="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
                </li>
                <li>
                  <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
                </li>
              </ul>
            </div>
        )}
      </div>
    </div>



  );
};

export default Navbar;
