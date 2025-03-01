import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    document.getElementById("my_modal_3").close();
  };
  // Function to close modal before navigating
  const handleSignUpClick = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* method="dialog" in form element */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>email</span> <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />{" "}
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>password</span> <br />
              <input
                type="password"
                placeholder="enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />{" "}
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {/* login button */}
            <div className="space-y-2 mt-5 flex justify-stretch">
              <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-400 duration-300 cursor-pointer">
                Login
              </button>
              <p>
                Not Registered?&nbsp;
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={handleSignUpClick}
                >
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
