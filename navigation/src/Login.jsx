import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className=  "bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Login</h2>
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg text-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg text-gray-800"
          />
          <button className="bg-blue-500 text-white hover:underline py-2 rounded-lg hover:bg-blue-600 cursor-pointer hover:text-red-700">
            Login
          </button>
        </form>

        {/* Go to Signup */}
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
