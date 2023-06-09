import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { notfyaction } from "./store/notifyslice";
import { cartitemaction } from "./store/cartitem";

let inital=true

function App() {
  const cartvisible = useSelector((state) => state.cart.isopen);

  const cart = useSelector((state) => state.cartitem);

  const dispatch = useDispatch();

  useEffect(() => {
    function sendcartdata(){
      dispatch(notfyaction.loodingstate());
      if (inital) {
        inital = false
        return
      }
      fetch(
        "https://react-http-735b2-default-rtdb.firebaseio.com/cartitem.json",
        {
          method: "PUT",
          body: JSON.stringify(cart.item),
        }
      )
        .then((res) => {
          if (res.ok) {
            dispatch(notfyaction.loodingsucess());
          }
        })
        .catch((err) => {
          dispatch(notfyaction.loodingerror());
        });
    }
    if (inital) {
      inital = false
      return
    }
    sendcartdata()
  }, [cart]);

  useEffect(() => {
    fetch(
      "https://react-http-735b2-default-rtdb.firebaseio.com/cartitem.json",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("somthing is wrong");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log("sucess")
        data.map((item) => dispatch(cartitemaction.addcartitem(item)));
      })
      .catch((err) => err);
  }, []);
  return (
    <Layout>
      {cartvisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
