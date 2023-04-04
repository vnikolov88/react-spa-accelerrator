import { Params, Path, useNavigate } from "@/router";
import type { MenuProps } from "antd";
import { Menu, Layout } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

type MenuItemRoutable<path> = MenuItem & {
  key: string;
  to: path;
  params?: path extends keyof Params ? Params[path] : never;
};

const menuItems: MenuItemRoutable<Path>[] = [
  {
    key: "home",
    label: "Home",
    to: "/",
  },
  {
    key: "charecters",
    label: "Charecters",
    to: "/charecters/:currentPage?",
    params: { currentPage: "1" },
  },
];

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        onClick={({ key }) => {
          const item = menuItems.find((item) => item.key === key);
          if (item) {
            const { to, params } = item;
            const routeParams = params as Params[typeof to extends keyof Params
              ? typeof to
              : never];
            if (params) navigate(to, { params: routeParams });
            else navigate(to);
          }
        }}
      />
    </Layout.Header>
  );
}
