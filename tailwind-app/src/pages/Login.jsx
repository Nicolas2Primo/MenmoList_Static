import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className=" h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-3xl font-bold">Welcome Back</h1>
      <form noValidate className="flex flex-col gap-6 items-center">
        <input
          required
          type="email"
          placeholder="Email"
          className="py-1 rounded-lg px-1 outline-none bg-black focus:border-gray-500 focus:placeholder-gray-300 border-[1.6px]  placeholder-white text-white"
        />

        <input
          required
          type="password"
          placeholder="Password"
          className=" py-1 rounded-lg px-1 outline-none bg-black focus:border-gray-500 focus:placeholder-gray-300 border-[1.6px]  placeholder-white text-white"
        />

        <button
          className=" bg-white rounded-lg text-black px-4 py-1 font-bold"
          type="submit"
        >
          Login
        </button>
      </form>

      <span className="text-white text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="font-semibold">
          Sign Up
        </Link>{" "}
      </span>
      <div className="flex items-center justify-center gap-2 ">
        <FcGoogle size={20}></FcGoogle>
        <button className="text-white text-sm">Login with google</button>
      </div>
    </div>
  );
};

export default Login;
