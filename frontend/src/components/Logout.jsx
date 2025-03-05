import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({ user: null });
      localStorage.removeItem("Users");
      toast.success("Logout successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error("error: ", error.message);
    }
  };
  return (
    <>
      <button
        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
        onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
