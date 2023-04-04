import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-2">
      <h1 className="text-bold text-2xl text-red-600">Auth Layout</h1>
      <Outlet />
    </div>
  );
}
