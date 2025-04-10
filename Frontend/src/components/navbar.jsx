import axios from "axios";


const Navbar = () => {
  const handleClick = async()=>{
    try{
      const res = await axios.post(
        'http://localhost:7777/auth/logout',{},{withCredentials:true}
      );
      console.log(res.data);
    }catch(err){
      console.log(err);
    }
    

  }
  return (
    <div className="navbar bg-neutral shadow-lg">
      <div className="flex-1">
        <a className="mx-2 font-bold text-xl text-white">DevTinder</a>
      </div>
      <div className="avatar mx-2">
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
            className="inline-block h-5 w-5 stroke-current cursor-pointer text-white "
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
          tabIndex={1}
          className=" absolute dropdown-content right-4 top-16 bg-white shadow-lg rounded-lg p-0 space-y-2 m-0 h-auto w-28"
        >
          <li className="hover:bg-base-300 cursor-pointer p-4 text-center">Profile</li>
          <li className="hover:bg-base-300 cursor-pointer p-4 text-center">Home</li>
          <button className="hover:bg-base-300 w-full" onClick={handleClick}><li className=" cursor-pointer p-4" >Logout</li></button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
