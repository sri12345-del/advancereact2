import { Route } from "react-router-dom";
import Login from "./pages/Auth";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/layout";

function App() {
  return (
    <Layout>
      <Route path="/auth">
        <Login></Login>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
    </Layout>
  );
}

export default App;
