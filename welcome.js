import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
          <h1>this is Welcome page</h1>
          <Route path="/welcome/user">
              <p>welcome page</p>
          </Route>
    </section>
  );
};

export default Welcome;
