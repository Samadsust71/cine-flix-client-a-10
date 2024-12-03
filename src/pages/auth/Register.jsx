
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const {
        createUser,
        setUser,
        updateUserProfile,
        signInWithGoogle,
        setLoading,
        loading
      } = useContext(AuthContext);
      const [errorMessage, setErrorMessage] = useState();
      const [showPass, setShowPass] = useState(false);
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMessage("");
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
    
        if (password.length < minLength) {
          setErrorMessage("Password must be at least 6 characters long.");
          return;
        }
    
        if (!hasUpperCase) {
          setErrorMessage("Password must contain an uppercase letter");
          return;
        }
        if (!hasLowerCase) {
          setErrorMessage("Password must contain a lowercase letter");
          return;
        }
         
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            setUser(user);
            updateUserProfile(name, photo);
            setLoading(false);
            e.target.reset();
            toast.success("Registration Succesful !");
            navigate(`${location?.state ? location.state : "/"}`);
          })
        .catch((err) => {
          setLoading(false);
          setErrorMessage(err.message)
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
    <div className="flex flex-col justify-center items-center my-10 max-w-xl w-11/12 mx-auto">
      <div className="card bg-gradient-to-b from-blue-50 via-sky-100 to-white w-full max-w-xl shrink-0 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center pt-6">Register now!</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered bg-white"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="btn btn-xs absolute right-2 top-12"
            >
              {showPass ? <FaEye /> :<FaEyeSlash /> }
            </button>
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
            className="py-2 rounded-lg bg-[#0a5784] text-white font-bold hover:bg-[#084a63] active:bg-[#06394e]">
              {loading?'Registering...':'Register'}
              
            </button>
          </div>
        </form>

        <p className="text-center mb-6">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#0a7c84fd]">
            Login
          </Link>{" "}
        </p>
      </div>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="px-4 flex items-center justify-center gap-2 py-2 border border-[#0a5784] bg-gradient-to-b from-blue-50 via-sky-100 to-white w-full rounded-lg text-[#0a5784] hover:bg-sky-200 active:bg-sky-300 transition-all"
      >
        <FcGoogle />
        <span>Sign Up with Google</span>
      </button>
    </div>
  )
}

export default Register
