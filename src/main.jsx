import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-wrap-balancer";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Provider>
            <App />
          </Provider>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
