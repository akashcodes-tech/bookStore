import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = ({ showModal }) => {
  useEffect(() => {
    if (showModal) {
      document.getElementById("my_modal_3").showModal();
    }
  }, [showModal]);

  const closeModal = () => document.getElementById("my_modal_3").close();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const res = await axios.post("http://localhost:4001/user/login", { email, password });
      if (res.data) {
        toast.success("Login successful!");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        closeModal();
        navigate(from, { replace: true }); // Redirects correctly
        setTimeout(() => window.location.reload(), 500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>email</span> <br />
              <input
                autoComplete="email"
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "email is required" })}
              />{" "}
              <br />
              {errors.email && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>password</span> <br />
              <input
                autoComplete="current-password"
                type="password"
                placeholder="enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "password is required" })}
              />{" "}
              <br />
              {errors.password && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            {/* login button */}
            <div className="space-y-2 mt-5 flex justify-stretch">
              <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-400 duration-300 cursor-pointer">
                Login
              </button>
              <p>
                Not Registered?&nbsp;
                <Link to="/signup" className="underline text-blue-500 cursor-pointer" onClick={closeModal}>
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
