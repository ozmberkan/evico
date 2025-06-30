import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutes } from "./routes/AuthRoutes";
import { HomeRoutes } from "./routes/HomeRoutes";

const App = () => {
  const router = createBrowserRouter([HomeRoutes, AuthRoutes]);

  return <RouterProvider router={router} />;
};

export default App;
