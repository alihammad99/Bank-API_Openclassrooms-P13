import Layout from "./components/layout";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import TransactionsPage from "./pages/transactions";
import UserPage from "./pages/user";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <LoginPage />
        </Layout>
      ),
    },
    {
      path: "/profile",
      element: (
        <Layout>
          <UserPage />
        </Layout>
      ),
    },
    {
      path: "/transactions",
      element: (
        <Layout>
          <TransactionsPage />
        </Layout>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
