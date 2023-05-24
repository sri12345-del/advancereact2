import { Modal } from "react-bootstrap";
import Cartitemlist from "./cartitemlist";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Cartitem = (props) => {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header>
        <Modal.Title>Cartitem</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cartitemlist item={productsArr}></Cartitemlist>
      </Modal.Body>
      <Modal.Footer>
        <span>totalamount</span>
        <span>
          <button onClick={props.close} variant="primary">
            close
          </button>
        </span>
       
      </Modal.Footer>
    </Modal>
  );
};

export default Cartitem;
