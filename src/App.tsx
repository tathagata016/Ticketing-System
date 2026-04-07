import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import ProtectedRoute from "./components/ProtectedRoute";

export const App = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { 
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element:( 
        <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>
        ),
      },
      {
        path: "/tickets",
        element: (
        <ProtectedRoute>
        <Tickets />
        </ProtectedRoute>
        ),
      },
    ],
  },
]);