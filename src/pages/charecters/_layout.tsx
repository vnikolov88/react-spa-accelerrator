import { useAuth } from "@/context";
import { Outlet } from "react-router-dom";

export default function About() {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h1>You are seeing this page as {user?.email}</h1>
      <Outlet />
    </div>
  );
}
