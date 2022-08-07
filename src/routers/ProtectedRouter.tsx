import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRouter() {
  const token = true
  return token ? <Outlet /> : <Navigate to="/" />
}