const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">HRMS</h2>
      <nav className="space-y-4">
        <p>Dashboard</p>
        <p>Employees</p>
        <p>Attendance</p>
        <p>Leaves</p>
        <p>Payroll</p>
      </nav>
    </aside>
  );
};

export default Sidebar;
