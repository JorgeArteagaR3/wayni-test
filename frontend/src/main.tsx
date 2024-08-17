import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import NamePage from "./pages/Name.tsx";
import UserNamePage from "./pages/UserName.tsx";
import { Toaster } from "sonner";
import ChangePasswordPage from "./pages/ChangePassword.tsx";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/name",
        element: <NamePage />,
      },
      {
        path: "/username",
        element: <UserNamePage />,
      },
      {
        path: "/change-password",
        element: <ChangePasswordPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
