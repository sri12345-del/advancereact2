import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>this is product page</h1>
      <ul>
        <li>
          <Link to="/products/p1">product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">product 2</Link>
        </li>
        <li>
          <Link to="/products/p3">product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
