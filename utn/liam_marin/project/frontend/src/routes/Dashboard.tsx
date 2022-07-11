import { useContext } from "react";
import { Navigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import Heading from "../components/Heading";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const [token] = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-prose mx-auto px-4">
      <Heading>Dashboard</Heading>
      <div className="border p-6 rounded-lg">
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;
