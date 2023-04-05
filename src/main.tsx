import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <Routes />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
);
