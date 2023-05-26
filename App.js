import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Product";
import Rootlayout from "./pages/Root";
import Error from "./pages/error";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Homepage></Homepage> },
      { path: "/product", element: <Productpage></Productpage> },
      { path: "/about", element: <About></About> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
