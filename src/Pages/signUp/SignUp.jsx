import React, { createContext, useContext } from "react";
import loginImg from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp page</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row gap-8">
          <div className="text-center md:w-1/2 lg:text-left">
            <h2 className="text-3xl font-bold text-black mb-4 text-center ">
              Sign Up Now!!
            </h2>
            <img src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm md:w-1/2 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-bold">
                    This field is required!!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 text-bold">
                    Email is required!!
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL")}
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-bold">
                    Password is required!
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 font-bold">
                    Password must be 6 characters!
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500 font-bold">
                    Password must be less than 20 characters!
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 font-bold">
                    Password must have at least one uppercase, one lowercase,
                    one number, and one special character!
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-primary"
                />
              </div>
              <p className=" text-sm font-semibold  ">
                Already have an account?{" "}
                <Link className="underline hover:text-green-600" to="/login">
                  login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;