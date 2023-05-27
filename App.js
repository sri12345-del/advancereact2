import { Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Product from "./pages/product";
import MainHeader from "./component/MainHomepage";
import About from "./pages/About";

function App() {

  const additemhandler = async (data) => {
    console.log(data)
    try {
      let response = await fetch("https://react-http-735b2-default-rtdb.firebaseio.com/movies.json", {
        method: "POST",
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/product">
          <Product></Product>
        </Route>
        <Route path="/About">
          <About additem={additemhandler}></About>
        </Route>
      </main>
    </div>
  );
}

export default App;
