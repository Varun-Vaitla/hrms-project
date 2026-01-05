import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-500 text-sm">Total Employees</h3>
            <p className="text-3xl font-bold text-slate-800 mt-2">120</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-500 text-sm">Present Today</h3>
            <p className="text-3xl font-bold text-slate-800 mt-2">95</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-500 text-sm">On Leave</h3>
            <p className="text-3xl font-bold text-slate-800 mt-2">10</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-slate-500 text-sm">Payroll Processed</h3>
            <p className="text-3xl font-bold text-slate-800 mt-2">₹8.2L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

