import { Outlet } from "react-router-dom";
import { Modals } from "@generouted/react-router";

import NavBar from "@/components/NavBar";
import { Layout } from "antd";
import { AuthProvider } from "@/context";
import { Guard } from "@/config";

export default function App() {
  return (
    <AuthProvider>
      <Guard>
        <Layout>
          <NavBar />
          <main>
            <Outlet />
          </main>
          <Modals />
        </Layout>
      </Guard>
    </AuthProvider>
  );
}
