import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
   <div className="min-h-screen flex flex-col" >
   <header className="bg-green-600 text-white p-4 font-semibold text-lg" >IT Ticket Support </header>
   
   <div className="flex flex-1">

    <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
   <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tickets"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            Tickets
          </NavLink>
        </aside>

        {/* 🔹 Page Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>

    </div>
   </div>
  );
};

export default Layout;