import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-wrap-balancer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Provider>
          <App />
        </Provider>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
