import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, setUser, signInWithGoogle, emailInfo , setLoading,
    loading} =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false)
        e.target.reset();
        toast.success("Login Succesfull");
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch(() => {
        setLoading(false)
        setErrorMessage("Invalid Email or Password");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        setLoading(false)
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.message)
      });
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-10 max-w-xl w-11/12 mx-auto">
        <div className="card bg-gradient-to-b from-blue-50 via-sky-100 to-white w-full max-w-xl shrink-0 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center pt-6">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailInfo}
                placeholder="Enter your email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-white"
              />
              <button
              type="button"
                onClick={() => setShowPass(!showPass)}
          
                className="btn btn-xs absolute right-2 top-12"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </button>
              <label className="label">
                <Link
                  
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div>
              {errorMessage && (
                <label className="label bg-red-100 p-2 rounded-md">
                  <span className="label-text text-xs text-red-600">
                    {errorMessage}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control mt-6">
              <button 
              disabled={loading}
              className="py-2 rounded-lg bg-[#121C22] text-white font-bold">
                {loading?"Logging in...":"Login"}
              </button>
            </div>
          </form>

          <p className="text-center mb-6">
            Don"t have an account?{" "}
            <Link to={"/register"} className="text-[#FFB347]">
              Register
            </Link>{" "}
          </p>
        </div>
        <div className="divider dark:text-white">OR</div>
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="px-4 flex items-center justify-center gap-2 py-2 border border-[#0a5784] bg-gradient-to-b from-blue-50 via-sky-100 to-white w-full rounded-lg text-[#0a5784] hover:bg-sky-200 active:bg-sky-300 transition-all"
        >
          <FcGoogle/>
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;