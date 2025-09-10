import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen text-dark">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 ">
        <h2 className="text-2xl font-bold text-gray-800 text mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-lg text-gray-800 "
          />
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
          <button className="bg-green-500 text-white  hover:underline py-2 rounded-lg hover:bg-green-700  cursor-pointer  hover:text-red-700">
            Signup
          </button>
        </form>

        {/* Back to Login */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline  cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
