import React,{useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import Autocontext from '../store/auto-context';

const Home = () => {
  const autctx= useContext(Autocontext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={autctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
