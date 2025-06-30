import Layout from "~/layouts/Layout";
import About from "~/pages/About";
import Contact from "~/pages/Contact";
import Home from "~/pages/Home";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/iletisim", element: <Contact /> },
    { path: "/hakkimizda", element: <About /> },
  ],
};
