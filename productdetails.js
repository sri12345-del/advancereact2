import { useParams } from "react-router-dom"


const Productdetails = () => {
    const param=useParams()
  return (
    <section>
          <h1>product details</h1>
      <p>{param.productId}</p>
      <img src="image.jpg" alt="a boy"></img>
    </section>
  );
};

export default Productdetails;
