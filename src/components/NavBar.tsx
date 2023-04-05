import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    key: "home",
    label: "Home",
    to: "/",
  },
  {
    key: "charecters",
    label: "Charecters",
    to: "/charecters/:currentPage?",
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
            navigate(item.to);
          }
        }}
      />
    </Layout.Header>
  );
}
