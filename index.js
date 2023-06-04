import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Autcontextprovider } from "./store/autcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Autcontextprovider>
      <App />
    </Autcontextprovider>
  </BrowserRouter>
);
