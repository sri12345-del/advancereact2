import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartaction } from '../../store/cartslice';


const CartButton = (props) => {
  const cartitem = useSelector(state => state.cartitem.totalquantity)
  console.log(cartitem)
  const dispatch = useDispatch() 

  const isopenhandler = () => {
    dispatch(cartaction.cartvisible())
  }
  return (
    <button className={classes.button} onClick={isopenhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{ cartitem}</span>
    </button>
  );
};

export default CartButton;
