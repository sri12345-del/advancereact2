import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { notfyaction } from "./store/notifyslice";

function App() {
  const cartvisible = useSelector((state) => state.cart.isopen);

  const cart = useSelector((state) => state.cartitem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notfyaction.loodingstate());
    fetch(
      "https://react-http-735b2-default-rtdb.firebaseio.com/cartitem.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    )
      .then((res) => {
        console.log("sucess")
        if (res.ok) {
          dispatch(notfyaction.loodingsucess());
        }
      })
      .catch((err) => {
        dispatch(notfyaction.loodingerror());
      });
  }, [cart]);
  return (
    <Layout>
      {cartvisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
