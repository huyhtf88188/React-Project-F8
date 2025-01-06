import { Navigate, Outlet } from "react-router-dom";

const Dasbroad = () => {
  const userRole = localStorage.getItem("role");

  return <>{userRole === "admin" ? <Outlet /> : <Navigate to="*" replace />}</>;
};

export default Dasbroad;
