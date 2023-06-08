import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartaction } from '../../store/mainstore';

const CartButton = (props) => {
 const dispatch=useDispatch() 
  const isopenhandler = () => {
    dispatch(cartaction.cartvisible())
  }
  return (
    <button className={classes.button} onClick={isopenhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
