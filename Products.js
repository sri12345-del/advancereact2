import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummydata = [
  {
    id: "f1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "f2",
    title: "Test2",
    price: 7,
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummydata.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
