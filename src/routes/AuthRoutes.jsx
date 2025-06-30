import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/Auth/Login";
import Register from "~/pages/Auth/Register";

export const AuthRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    { path: "/giris-yap", element: <Login /> },
    { path: "/kayit-ol", element: <Register /> },
  ],
};
