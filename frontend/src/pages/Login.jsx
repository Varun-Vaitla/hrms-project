import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        <h2 className="text-2xl font-bold text-center text-slate-800">
          HRMS Login
        </h2>
        <p className="text-center text-slate-500 mt-1">
          Sign in to continue
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          © 2026 HRMS
        </p>
      </div>
    </div>
  );
};

export default Login;
