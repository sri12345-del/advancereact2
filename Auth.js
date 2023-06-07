import classes from './Auth.module.css';
import { authaction } from '../store/index';
import { useDispatch} from 'react-redux';
import { Fragment } from 'react';

const Auth = () => {
  const dispatch = useDispatch()

  const loginhandler = (e) => {
    e.preventDefault();
      dispatch(authaction.loogedin())
  }
  return (
    <Fragment>
      <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button onClick={loginhandler}>Login</button>
          </form>
        </section>
      </main>
      </Fragment>
  );
};

export default Auth;
