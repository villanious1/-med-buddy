import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const logoutHandler = () => {
    // Admin logout
    setAToken("");
    localStorage.removeItem("aToken");

    // Doctor logout
    setDToken("");
    localStorage.removeItem("dToken");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-3 text-xs">
        <div>
          <p className="text-xl font-bold tracking-tight text-primary">
            Med Buddy
          </p>
          <p className="text-gray-500">Get doctors at your home</p>
        </div>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logoutHandler}
        className="cursor-pointer bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
