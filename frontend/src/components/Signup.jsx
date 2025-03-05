import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  /*react-hook-form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);
      if (res.data) {
        toast.success("Signup successful!");
        navigate(from, { replace: true }); // Redirects correctly
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center ">
        <div className="w-[800px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              {/* name */}
              <div className="mt-4 space-y-2">
                <span>name</span> <br />
                <input
                  type="text"
                  placeholder="enter your name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* email */}
              <div className="mt-4 space-y-2">
                <span>email</span> <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span>password</span> <br />
                <input
                  type="password"
                  placeholder="enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* login button */}
              <div className="space-y-2 mt-5 flex justify-stretch">
                <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-400 duration-300 cursor-pointer">
                  SignUp
                </button>
                <div>
                  Already Registered?&nbsp;
                  <Link to="/login" state={{ from: "/" }} className="underline text-blue-500 cursor-pointer">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
